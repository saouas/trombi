export const buildUrl = (endpoint = '', params = []) => {
  let finalUrl = `${endpoint}?`;
  Object.entries(params).map(([prop, val], index) => finalUrl += index === 0 ? `${prop}=${val}` : `&${prop}=${val}`);
  return finalUrl;
};
