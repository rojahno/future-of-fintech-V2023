import Link from "next/link";
import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 id={styles.logo}>⚡ Electrify ⚡</h1>
      </Link>
    </header>
  );
}
