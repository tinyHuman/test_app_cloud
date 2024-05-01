import { getJSON, BASE_URL, postJSON, putJSON, deleteJSON } from ".";

const URL = `${BASE_URL}/items`;

const ItemsAPI = {
  readAll() {
    return getJSON(URL);
  },
  read(id) {
    return getJSON(`${URL}/${id}`);
  },
  insert(item) {
    const data = postJSON(URL, { body: item });
    return data;
  },
  update(item) {
    const data = putJSON(`${URL}/${item.id}`, { body: item });
    return data;
  },
  delete(item) {
    let data = null;

    if (item != null) {
      data = deleteJSON(`${URL}/${item[0].id}`);
    }

    return data;
  },
};

export default ItemsAPI;
