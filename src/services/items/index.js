import api from "../api";

const getItems = async (search) => {
  const response = (
    await api.get(`/sites/MLA/search?q=${!!search ? search : "q:query"}`)
  ).data.results;

  return response;
};

const getItemById = async (id) => {
  const itemResponse = (await api.get(`/items/${id}`)).data;
  const descriptionResponse = (await api.get(`/items/${id}/description`)).data;

  const newResponse = {
    ...itemResponse,
    description: descriptionResponse.plain_text,
  };

  return newResponse;
};

export { getItems, getItemById };
