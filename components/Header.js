import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.siteHeader}>
      <div className={styles.siteIdentity}>
        <h1>Demo App in Cloud</h1>
      </div>
      <div>
        <Link className={styles.link} href={`/`}>
          Home
        </Link>
        <Link className={styles.link} href={`/items/create`}>
          Create
        </Link>
      </div>
    </div>
  );
}
