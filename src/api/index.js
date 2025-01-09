import axios from "axios";

export const getRecipesList = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: size || "20",
      tags,
    },
    headers: {
      "x-rapidapi-key": "aa02b9fa1fmsh7d2f8806421132cp15ffbdjsna2a82565af26",
      "x-rapidapi-host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }

  axios.request(options);
};
