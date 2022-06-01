const buildUrl = (endpoint = '', params = []) => {
  let finalUrl = `${endpoint}?`;
  Object.entries(params).map(([prop, val], index) => finalUrl += index === 0 ? `${prop}=${val}` : `&${prop}=${val}`);
  return finalUrl;
};

const getCharacterNameAndImage = (characters = []) => {
  return characters.map((char) => ({
    name: char?.name,
    photo: `${char?.thumbnail?.path}.${char?.thumbnail?.extension}`,
  }));
};

module.exports = {
  buildUrl,
  getCharacterNameAndImage,
};
