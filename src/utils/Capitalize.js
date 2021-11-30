const capitalize = (str) => {
  const arr = str.toLowerCase().split("");
  return arr[0].toUpperCase() + arr.slice(1).join("");
};

export default capitalize;
