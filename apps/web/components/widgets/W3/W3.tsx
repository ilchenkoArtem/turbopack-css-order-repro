"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W3.module.css";

export function W3() {
  return (
    <div className={styles.w3}>
      <p className={styles.t3}>Widget 3</p>
      <Button>Action 3</Button>
    </div>
  );
}