"use server";

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import { action, cache, revalidate } from "@solidjs/router";
import { getCookie, setCookie } from "vinxi/http";
import { eq } from "drizzle-orm";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

export const getDb = () => {
  const db = drizzle(new Database("db.sqlite"), { schema });

  migrate(db, { migrationsFolder: "drizzle" });

  return db;
};
export const getChat = cache(async () => {
  const cookie = getCookie("chat_session");
  if (!cookie) return null;

  const currChat = await getDb().query.chat.findFirst({
    where: eq(schema.chat.id, cookie),
  });

  return currChat;
}, "chat");

export const createChat = action(async (data: FormData) => {
  "use server";

  const response = data.get("g-recaptcha-response");

  if (response) {
    const body = new FormData();

    body.set("secret", "SECRET");
    body.set("response", response);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      body,
      method: "POST",
    });

    const { success } = await res.json();

    if (success) {
      const [newChat] = await getDb()
        .insert(schema.chat)
        .values({})
        .returning();

      setCookie("chat_session", newChat.id);

      await revalidate("chat");
    } else {
      return new Error("Captcha failed. Please restart.");
    }
  } else {
    return new Error("Captcha failed. Please restart.");
  }
}, "create-chat");
