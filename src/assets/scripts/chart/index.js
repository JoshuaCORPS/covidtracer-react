export const createAffectedLineDataPoints = (arrData, type) => {
  const newData = arrData.map((data) => {
    const [month, day, year] = new Date(data.lastUpdated)
      .toLocaleDateString()
      .split("/");

    return {
      x: new Date(`${year}- ${month}- ${day}`),
      y:
        type === "confirmed"
          ? data.totalConfirmed
          : type === "recovered"
          ? data.totalRecovered
          : data.totalDeaths,
    };
  });

  return newData;
};

export const createColumDataPoints = (arrData) => {
  const newData = arrData
    .filter((data) => data.country !== "World")
    .map((data) => {
      return {
        y: data.daily_cases,
        label: data.country,
      };
    });

  return newData;
};

export const createCountryLineDataPoints = (arrData, type) => {
  const newData = arrData.map((data) => {
    const [month, day, year] = new Date(data.last_updated)
      .toLocaleDateString()
      .split("/");

    return {
      x: new Date(`${year}- ${month}- ${day}`),
      y:
        type === "confirmed"
          ? data.total_confirmed
          : type === "recovered"
          ? data.total_recovered
          : data.total_deaths,
    };
  });

  return newData;
};
