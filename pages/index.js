import Item from "@/components/Item";
import ItemsAPI from "@/lib/api/Items";

export default function Home({ items }) {
  return (
    <>
      <h1>Take a look at our items</h1>
      <div>
        {items.map((item) => {
          return <Item props={item} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const items = await ItemsAPI.readAll();

  return {
    props: { items },
  };
}
