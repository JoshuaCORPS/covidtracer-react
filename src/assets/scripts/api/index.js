import axios from "axios";

export const fetchData = async (endpoint) => {
  try {
    const { data } = await axios.get(endpoint);

    return data;
  } catch (err) {
    console.log(err);
  }
};
