import { describe, expect, it } from "vitest";
import { createFaceSource } from "./aiFaces.js";

const image = (bytes: number[]) =>
  new Response(Buffer.from(bytes), { status: 200, headers: { "content-type": "image/jpeg" } });

const source = (responses: Response[]) => {
  const queue = [...responses];
  return createFaceSource({
    fetchImpl: (async () => queue.shift() ?? new Response("", { status: 500 })) as typeof fetch,
    sleep: async () => {},
  });
};

describe("createFaceSource", () => {
  it("returns the picture bytes", async () => {
    const next = source([image([1, 2, 3])]);
    expect([...(await next())!]).toEqual([1, 2, 3]);
  });

  it("asks again when the same face comes back", async () => {
    const next = source([image([1]), image([1]), image([2])]);
    await next();
    expect([...(await next())!]).toEqual([2]);
  });

  it("skips responses that are not images", async () => {
    const html = new Response("<html>", { status: 200, headers: { "content-type": "text/html" } });
    const next = source([html, image([9])]);
    expect([...(await next())!]).toEqual([9]);
  });

  it("gives up with null after repeated failures", async () => {
    expect(await source([])()).toBeNull();
  });
});
