import { computeLayout } from "./compute";
import type { LayoutMessage, LayoutResponse } from "./protocol";

// Heavy layout (ELK, team frame packing) runs here, off the main thread.
const scope = self as unknown as {
  onmessage: ((event: MessageEvent<LayoutMessage>) => void) | null;
  postMessage: (response: LayoutResponse) => void;
};

scope.onmessage = async ({ data }) => {
  try {
    scope.postMessage({ id: data.id, result: await computeLayout(data) });
  } catch (error) {
    scope.postMessage({
      id: data.id,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
