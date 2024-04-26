import ItemsAPI from "@/lib/api/Items";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ItemForm({ editedItem = null }) {
  const defaultItem = {
    title: "",
    text: "",
  };

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState(defaultItem);

  useEffect(() => {
    if (editedItem != null) {
      setItem(editedItem);
    }
  }, [editedItem]);

  const handleChange = (e) => {
    const name = e.target.name;
    const text = e.target.value;
    setItem({
      ...item,
      ...{ [name]: text },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (item.id) {
      const updatedItem = await ItemsAPI.update(item);
      setItem(updatedItem);
      router.push(`/items/${item.id}`);
    } else {
      const newItem = await ItemsAPI.insert(item);
      setItem(newItem);
      router.push(`/items/${newItem.id}`);
    }

    setIsLoading(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <div>
            <input
              value={item.title}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <div>
            <textarea
              value={item.text}
              type="text"
              name="text"
              id="text"
              placeholder="Text"
              rows="10"
              onChange={handleChange}
            />
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
