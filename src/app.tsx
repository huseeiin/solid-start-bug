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
                <strong>
                  <picture>
                    <source srcset="apple-touch-icon.BrBp1IOq.avif 90w, apple-touch-icon.iNRkcMb7.avif 180w" />
                    <source srcset="apple-touch-icon.C5JU40_t.webp 90w, apple-touch-icon.CxRmvO25.webp 180w" />
                    <source srcset="apple-touch-icon.wIiLtsMj.png 90w, apple-touch-icon.CGmJZUdF.png 180w" />
                    <img
                      src="apple-touch-icon.CGmJZUdF.png"
                      alt="Gazelle logo"
                      width="32"
                      height="32"
                    />
                  </picture>
                  <a href="/">Gazelle</a>
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <a target="_blank" href="https://youtu.be/MmB9b5njVbA">
                  Game Trailer
                </a>
              </li>
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
