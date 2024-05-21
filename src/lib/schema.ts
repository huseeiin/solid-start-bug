import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

export const chat = sqliteTable("chat", {
  id: text("id").notNull().$default(nanoid),
  messages: text("messages", { mode: "json" })
    .notNull()
    .$type<
      {
        text: string;
        author: "me" | "support";
      }[]
    >()
    .$default(() => []),
});
