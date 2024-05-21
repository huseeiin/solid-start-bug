import { createMiddleware } from "@solidjs/start/middleware";
import { randomBytes } from "node:crypto";

export default createMiddleware({
  onRequest: [
    (event) => {
      event.locals.nonce = randomBytes(16).toString("base64url");
    },
  ],
});
