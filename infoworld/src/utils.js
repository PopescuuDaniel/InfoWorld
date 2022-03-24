export const fetchProductByCategory = (category) => {
  return fetch(`http://localhost:3000/${category}`);
};
