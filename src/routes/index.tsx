import { Meta, Title } from "@solidjs/meta";
import "../lib/home.css";

export default function Home() {
  return (
    <main>
      <Title>Website</Title>
      <Meta name="description" content="Product Page" />
      <h1>Website Product</h1>
      <label for="email">Email</label>
      <input id="email" autocomplete="off" required type="email" />
      <button>Buy</button>
    </main>
  );
}
