import axios from "axios";

export const getGlobalCount = async () => {
  try {
    const { data } = await axios.get("/v3/stats/worldometer/global");

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCountriesCount = async () => {
  try {
    const { data } = await axios.get("/v3/stats/worldometer/country");

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getOutbreakOvertime = async () => {
  try {
    const { data } = await axios.get(
      "/v3/stats/worldometer/totalTrendingCases"
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTopTenCountries = async () => {
  try {
    const { data } = await axios.get("/v3/analytics/dailyNewStats?limit=10");

    return data;
  } catch (err) {
    console.log(err);
  }
};
