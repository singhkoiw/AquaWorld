import axios from "axios";

const BASE_URL = "https://api.worldbank.org/v2";

export const getWaterAccessData = async () => {
  const response = await axios.get(
    `${BASE_URL}/country/all/indicator/SH.H2O.BASW.ZS?format=json`
  );

  return response.data;
};