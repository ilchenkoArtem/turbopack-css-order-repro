"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W4.module.css";

export function W4() {
  return (
    <div className={styles.w4}>
      <p className={styles.t4}>Widget 4</p>
      <Button>Action 4</Button>
    </div>
  );
}