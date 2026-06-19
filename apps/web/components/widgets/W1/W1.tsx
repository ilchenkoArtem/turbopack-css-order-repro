"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W1.module.css";

export function W1() {
  return (
    <div className={styles.w1}>
      <p className={styles.t1}>Widget 1</p>
      <Button>Action 1</Button>
    </div>
  );
}