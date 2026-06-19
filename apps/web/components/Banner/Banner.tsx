"use client";

import { Button } from "@ui-kit/components/Button/Button";
import styles from "./Banner.module.css";

/** Home banner with a transparent primary button (override on top of Button). */
export function Banner() {
  return (
    <div className={styles.banner}>
      <Button href="/catalog" className={styles.featureButton}>
        Show more
      </Button>
    </div>
  );
}