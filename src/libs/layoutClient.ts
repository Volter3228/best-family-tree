import type {
  LayoutKind,
  LayoutMessage,
  LayoutRequests,
  LayoutResponse,
  LayoutResults,
} from "@/workers/layout/protocol";

interface Pending {
  message: LayoutMessage;
  resolve: (result: LayoutResults[LayoutKind]) => void;
  reject: (error: Error) => void;
}

let worker: Worker | null = null;
let nextRequestId = 0;
const pending = new Map<number, Pending>();

// The worker died (failed to load, crashed): rerun what was waiting on the
// main thread and use the main thread from now on.
let workerBroken = false;

const failOver = () => {
  workerBroken = true;
  worker?.terminate();
  worker = null;
  const waiting = [...pending.values()];
  pending.clear();
  waiting.forEach(({ message, resolve, reject }) =>
    runInline(message).then(resolve, reject),
  );
};

const getWorker = () => {
  if (worker) return worker;

  worker = new Worker(
    new URL("../workers/layout/layout.worker.ts", import.meta.url),
    { type: "module" },
  );
  worker.onmessage = ({ data }: MessageEvent<LayoutResponse>) => {
    const request = pending.get(data.id);
    if (!request) return;
    pending.delete(data.id);
    if ("error" in data) request.reject(new Error(data.error));
    else request.resolve(data.result);
  };
  worker.onerror = failOver;
  worker.onmessageerror = failOver;
  return worker;
};

// Same computation on the main thread, for environments without Workers.
async function runInline<K extends LayoutKind>(message: LayoutMessage<K>) {
  const { computeLayout } = await import("@/workers/layout/compute");
  return (await computeLayout(message)) as LayoutResults[K];
}

/** Runs a layout in the Web Worker (falls back to the main thread). */
export const requestLayout = <K extends LayoutKind>(
  kind: K,
  payload: LayoutRequests[K],
): Promise<LayoutResults[K]> => {
  const message: LayoutMessage<K> = { id: nextRequestId++, kind, payload };

  if (workerBroken) return runInline(message);

  let target: Worker;
  try {
    target = getWorker();
  } catch {
    workerBroken = true;
    return runInline(message);
  }

  return new Promise((resolve, reject) => {
    pending.set(message.id, {
      message: message as LayoutMessage,
      resolve: resolve as Pending["resolve"],
      reject,
    });
    target.postMessage(message);
  });
};
