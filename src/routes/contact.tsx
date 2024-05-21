import { Meta, Title, useHead } from "@solidjs/meta";
import { For, Suspense } from "solid-js";
import { createAsync, useSubmission } from "@solidjs/router";
import "../lib/contact.css";
import { createChat, getChat } from "~/lib/db";

export const route = { load: getChat };

const Recaptcha = () => {
  useHead({
    tag: "script",
    id: "recaptcha",
    setting: { close: true },
    props: {
      src: "https://www.google.com/recaptcha/api.js",
      async: true,
      defer: true,
    },
  });

  return (
    <div
      class="g-recaptcha"
      data-sitekey="6LdyF4wpAAAAAIAF7YO-78xmEsupJvXjZ9drwCsF"
    />
  );
};

export default function Contact() {
  const chat = createAsync(() => getChat());
  const submission = useSubmission(createChat);

  return (
    <main>
      <Meta
        name="description"
        content="Contact GazelleMC (we sell Minecraft: Java & Bedrock Edition) in case you have any questions"
      />
      <Title>Contact – Minecraft for $10.00</Title>
      <h1>Contact</h1>
      {submission.result && <p>{submission.result.message}</p>}
      <Suspense fallback={<p>Loading...</p>}>
        {chat() !== null ? (
          <For each={chat()?.messages}>
            {(message) => (
              <p>
                {message.author}: {message.text}
              </p>
            )}
          </For>
        ) : (
          <>
            <p>
              For security purposes, we want you to complete this challenge:
            </p>
            <form method="post" action={createChat}>
              <Recaptcha />
              <button>Create new chat</button>
            </form>
          </>
        )}
      </Suspense>
    </main>
  );
}
