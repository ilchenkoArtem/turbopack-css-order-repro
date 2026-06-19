"use client";

import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

/** Shared primary button. The `kindPrimary` class sets the orange background. */
export function Button({ href, className, children }: Props) {
  const cls = [styles.button, styles.kindPrimary, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}