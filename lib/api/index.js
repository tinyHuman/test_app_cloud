function createFetchFunction(method) {
  return async (url, params, noObjectInResponse = false) => {
    const _params = {
      method,
      headers: {
        "content-type": "application/json",
        mode: "no-cors",
      },
      ...params,
    };

    if (_params.body !== null) {
      _params.body = JSON.stringify(_params.body);
    }

    const response = await fetch(url, _params);

    if (!response.ok) {
      const error = new Error("Request failed with status " + response.status);
      error.response = response;
      throw error;
    }

    if (noObjectInResponse) {
      return response;
    }

    let data = await response.json();
    return data;
  };
}

export const getJSON = createFetchFunction("GET");
export const postJSON = createFetchFunction("POST");
export const putJSON = createFetchFunction("PUT");
export const deleteJSON = createFetchFunction("DELETE");
export const BASE_URL = "https://witschis-funcs.azurewebsites.net/api";
