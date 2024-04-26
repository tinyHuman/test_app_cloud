import Link from "next/link";
import styles from "./Item.module.css";
export default function Item({ props }) {
  return (
    <div className={styles.item}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <Link className={styles.link} href={`items/${props.id}`}>
        Details
      </Link>
    </div>
  );
}
