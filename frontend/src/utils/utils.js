export const buildUrl = (endpoint = '', params = {}) => {
  if(!Object.keys(params)?.length) return endpoint;
  let finalUrl = `${endpoint}?`;
  Object.entries(params).map(([prop, val], index) => finalUrl += index === 0 ? `${prop}=${val}` : `&${prop}=${val}`);
  return finalUrl;
};
