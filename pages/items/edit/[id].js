import ItemForm from "@/components/ItemForm";
import ItemsAPI from "@/lib/api/Items";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditItemPage() {
  const router = useRouter();
  const [item, setItem] = useState(null);

  const id = router.query.id;

  useEffect(() => {
    let isMounted = true;
    if (!router.isReady) return;

    const loadItem = async () => {
      const item = await ItemsAPI.read(id);
      if (isMounted) {
        console.log("ITEM", item);
        setItem(item);
      }
    };
    loadItem();

    return () => (isMounted = false);
  }, [router]);

  return (
    <div>
      <h1>Update item</h1>
      <ItemForm editedItem={item} />
    </div>
  );
}
