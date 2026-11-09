"use client";
import { useState } from "react";
import type { CounterProperties } from "@sharadox/template-web-library/counter/type";
import styles from "./index.module.scss";

/** An example client component with a CSS module: restyle it through `className`. */
export function Counter({ label, className }: CounterProperties) {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      className={[styles.counter, className].filter(Boolean).join(" ")}
      onClick={() => setCount(count + 1)}
    >
      {label} {count}
    </button>
  );
}
