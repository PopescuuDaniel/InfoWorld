export const fetchProductByCategory = (category, sortKey, orderType) => {
  return fetch(
    `http://localhost:3000/${category}?_sort=${sortKey}&_order=${orderType}`
  );
};
