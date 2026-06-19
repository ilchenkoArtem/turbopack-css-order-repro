"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./W20.module.css";

export function W20() {
  return (
    <div className={styles.w20}>
      <p className={styles.t20}>Widget 20</p>
      <Button>Action 20</Button>
    </div>
  );
}