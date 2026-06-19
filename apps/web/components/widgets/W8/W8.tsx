"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W8.module.css";

export function W8() {
  return (
    <div className={styles.w8}>
      <p className={styles.t8}>Widget 8</p>
      <Button>Action 8</Button>
    </div>
  );
}