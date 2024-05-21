import { Meta, Title } from "@solidjs/meta";
import "../lib/home.css";
import { Minecraft } from "~/lib/Minecraft";

export default function Home() {
  return (
    <main>
      <Title>Cheap Minecraft Accounts – GazelleMC</Title>
      <Meta
        name="description"
        content="Save a lot of money on Minecraft by buying it on our shop instead of Minecraft.net. Play on Xbox, PlayStation, PC, Android, IOS, Nintendo Switch and more!"
      />
      <h1>
        <Minecraft /> Buy Minecraft cheaper than ever!
      </h1>
      <p>
        We do not sell alts. Our accounts are brand new official Minecraft
        accounts created for you only after you complete the purchase.
      </p>
      <p>Both versions, Java & Bedrock for $10.00 only!</p>
      <label for="email">Email</label>
      <input id="email" autocomplete="off" required type="email" />
      <button>Buy</button>
    </main>
  );
}
