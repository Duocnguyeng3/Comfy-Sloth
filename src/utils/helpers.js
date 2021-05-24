export const formatPrice = (price) => {
  return Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (Array.isArray(unique[0])) {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
