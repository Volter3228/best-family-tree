import { describe, expect, it, vi } from "vitest";
import { createResendMailer } from "./resendMailer.js";

const message = { to: "a@b.c", subject: "Code", html: "<b>1</b>", text: "1" };

describe("createResendMailer", () => {
  it("posts the message with the bearer key", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(new Response("{}", { status: 200 }));
    await createResendMailer({
      from: "BEST Tree <login@mail.example.com>",
      apiKey: "re_key",
      fetchImpl,
    }).send(message);

    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect(init.headers.Authorization).toBe("Bearer re_key");
    expect(JSON.parse(init.body)).toEqual({
      from: "BEST Tree <login@mail.example.com>",
      to: ["a@b.c"],
      subject: "Code",
      html: "<b>1</b>",
      text: "1",
    });
  });

  it("throws with the status when Resend refuses, without the key", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValue(new Response("domain not verified", { status: 403 }));
    const send = createResendMailer({ from: "x", apiKey: "re_secret", fetchImpl }).send(
      message,
    );
    await expect(send).rejects.toThrow(/403 domain not verified/);
    await expect(send).rejects.not.toThrow(/re_secret/);
  });
});
