import Link from "next/link";
import { LogoMark } from "./logo-mark";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Align Craft home">
      <LogoMark />
      <span>
        Align Craft<span className="accent">.</span>
      </span>
    </Link>
  );
}
