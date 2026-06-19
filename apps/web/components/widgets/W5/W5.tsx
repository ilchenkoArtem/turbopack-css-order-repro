"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W5.module.css";

export function W5() {
  return (
    <div className={styles.w5}>
      <p className={styles.t5}>Widget 5</p>
      <Button>Action 5</Button>
    </div>
  );
}