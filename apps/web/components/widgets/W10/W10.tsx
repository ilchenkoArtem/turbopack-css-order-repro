"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W10.module.css";

export function W10() {
  return (
    <div className={styles.w10}>
      <p className={styles.t10}>Widget 10</p>
      <Button>Action 10</Button>
    </div>
  );
}