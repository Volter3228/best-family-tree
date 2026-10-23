import { describe, expect, it, vi } from "vitest";
import { bumpDataVersion, createVersionedCache } from "./readCache";

describe("createVersionedCache", () => {
  it("serves the stored value until a write happens", async () => {
    const load = vi.fn().mockResolvedValue("tree");
    const read = createVersionedCache(load);

    await read();
    const second = await read();

    expect(second.value).toBe("tree");
    expect(load).toHaveBeenCalledTimes(1);
  });

  it("reloads after a write bumps the data version", async () => {
    const load = vi.fn().mockResolvedValueOnce("old").mockResolvedValueOnce("new");
    const read = createVersionedCache(load);

    const before = await read();
    bumpDataVersion();
    const after = await read();

    expect(before.value).toBe("old");
    expect(after.value).toBe("new");
    expect(after.version).toBeGreaterThan(before.version);
  });

  it("lets concurrent readers share one load", async () => {
    let resolveLoad: (value: string) => void = () => undefined;
    const load = vi.fn(
      () => new Promise<string>((resolve) => (resolveLoad = resolve)),
    );
    const read = createVersionedCache(load);

    const readers = [read(), read(), read()];
    resolveLoad("tree");
    const results = await Promise.all(readers);

    expect(load).toHaveBeenCalledTimes(1);
    expect(results.map((r) => r.value)).toEqual(["tree", "tree", "tree"]);
  });

  it("does not keep a failed load and retries on the next read", async () => {
    const load = vi
      .fn()
      .mockRejectedValueOnce(new Error("db down"))
      .mockResolvedValueOnce("tree");
    const read = createVersionedCache(load);

    await expect(read()).rejects.toThrow("db down");
    const retry = await read();

    expect(retry.value).toBe("tree");
    expect(load).toHaveBeenCalledTimes(2);
  });
});
