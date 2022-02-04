export const slice_text = (str, count) => {
  return str.length > 50 ? str.slice(0, count) + "..." : str;
};
