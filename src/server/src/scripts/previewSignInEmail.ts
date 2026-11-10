import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { renderSignInCodeEmail } from "../auth/mailer/signInCodeEmail.js";

// Usage: npm run auth:preview-email [-- <output.html>]  then open the file in Chrome.
const out = process.argv[2] ?? "/tmp/sign-in-email-preview.html";
const origin = process.env.CLIENT_ORIGIN ?? "http://localhost:3000";
const { html } = renderSignInCodeEmail("123456", origin);
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, html);
console.log(`Wrote ${out}`);
