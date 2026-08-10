import axios from "axios";

export const getAllCountries = async () => {
  const response = await axios.get(
    "https://countriesnow.space/api/v0.1/countries/flag/images"
  );

  return response.data.data;
};