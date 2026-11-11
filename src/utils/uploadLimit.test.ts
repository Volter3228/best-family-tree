import { describe, expect, it } from "vitest";
import { exceedsUploadLimit, MAX_UPLOAD_BYTES } from "./uploadLimit";

describe("exceedsUploadLimit", () => {
  it("accepts a file exactly at the limit", () => {
    expect(exceedsUploadLimit({ size: MAX_UPLOAD_BYTES })).toBe(false);
  });

  it("rejects a file one byte over", () => {
    expect(exceedsUploadLimit({ size: MAX_UPLOAD_BYTES + 1 })).toBe(true);
  });

  it("accepts a small file", () => {
    expect(exceedsUploadLimit({ size: 2 * 1024 * 1024 })).toBe(false);
  });
});
