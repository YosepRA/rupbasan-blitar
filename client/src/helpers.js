export const filterPageFromUrl = (url, page) => {
  return url.replace(new RegExp(page), '');
};
