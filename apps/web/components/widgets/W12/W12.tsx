"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W12.module.css";

export function W12() {
  return (
    <div className={styles.w12}>
      <p className={styles.t12}>Widget 12</p>
      <Button>Action 12</Button>
    </div>
  );
}