"use client";

import { useEffect, useState } from "react";

const audiences = [
  "for ambitious founders.",
  "for business owners.",
  "for product teams.",
  "for modern companies.",
];
const prefixLength = "for ".length;

export function RotatingAudience() {
  const [text, setText] = useState(audiences[0]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let phrase = 0;
    let characters = audiences[0].length;
    let deleting = true;

    function tick() {
      const current = audiences[phrase];
      characters += deleting ? -1 : 1;
      setText(current.slice(0, characters));

      let delay = deleting ? 35 : 75;
      if (!deleting && characters === current.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && characters === prefixLength) {
        deleting = false;
        phrase = (phrase + 1) % audiences.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    }

    function restart() {
      clearTimeout(timer);
      phrase = 0;
      characters = audiences[0].length;
      deleting = true;
      setText(audiences[0]);
      if (!preference.matches) timer = setTimeout(tick, 1800);
    }

    restart();
    preference.addEventListener("change", restart);
    return () => {
      clearTimeout(timer);
      preference.removeEventListener("change", restart);
    };
  }, []);

  return (
    <strong className="rotating-audience">
      <span className="sr-only">
        for ambitious founders, business owners, product teams, and modern
        companies.
      </span>
      <span className="typewriter-stage" aria-hidden="true">
        {audiences.map((audience) => (
          <span className="typewriter-size" key={audience}>
            {audience}
            <span className="typewriter-cursor" />
          </span>
        ))}
        <span className="typewriter-text">
          {text}
          <span className="typewriter-cursor" />
        </span>
      </span>
    </strong>
  );
}
