"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W7.module.css";

export function W7() {
  return (
    <div className={styles.w7}>
      <p className={styles.t7}>Widget 7</p>
      <Button>Action 7</Button>
    </div>
  );
}