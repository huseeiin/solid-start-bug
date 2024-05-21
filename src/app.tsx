import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "@picocss/pico/css/pico.min.css";
import "./lib/pico.scss";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <nav>
            <ul>
              <li>
                <strong>App</strong>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/contact">Have any questions?</a>
              </li>
            </ul>
          </nav>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
