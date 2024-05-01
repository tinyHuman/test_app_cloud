import Item from "@/components/Item";
import ItemsAPI from "@/lib/api/Items";
import { useEffect } from "react";

export default function Home({ items }) {
  return (
    <>
      <h2>Take a look at our items</h2>
      <div>
        {items.map((item) => {
          return <Item key={item.id} props={item} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  await delay(500);
  const items = await ItemsAPI.readAll();

  return {
    props: { items },
  };
}
