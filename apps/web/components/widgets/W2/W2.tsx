"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W2.module.css";

export function W2() {
  return (
    <div className={styles.w2}>
      <p className={styles.t2}>Widget 2</p>
      <Button>Action 2</Button>
    </div>
  );
}