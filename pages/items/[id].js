import { useRouter } from "next/router";
import styles from "./[id].module.css";
import ItemsAPI from "@/lib/api/Items";
import Link from "next/link";

export default function DetailItem({ item }) {
  const router = useRouter();
  const { id } = router.query;

  const handleDelete = async () => {
    await ItemsAPI.delete(item);
  };

  return !item ? null : (
    <div className={styles.container}>
      <div>
        <h1>{item[0].title}</h1>
        <p>{item[0].text}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} href={`/`}>
          Back
        </Link>
        <Link className={styles.button} href={`/items/edit/${item[0].id}`}>
          Edit
        </Link>
        <Link className={styles.button} onClick={handleDelete} href={`/`}>
          Delete
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const items = await ItemsAPI.readAll();
  const paths = items.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const item = await ItemsAPI.read(id);
  return {
    props: { item },
  };
}
