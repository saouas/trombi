const axios = require('axios');

const{ MARVEL_API, MARVEL_SETTINGS }  = require('../config/marvel_endpoints');
const { buildUrl } = require('../utils/utils');

const getPublicCharacters = async (params) => {
  if(!MARVEL_API?.BASE_URL || !MARVEL_API?.CHARACTERS?.GET)
    throw new Error('please check marvel endpoint configuration');

  const url = buildUrl(`${MARVEL_API.BASE_URL}/${MARVEL_API.CHARACTERS.GET}`, MARVEL_SETTINGS);
  return await axios.get(url, { params : { ...MARVEL_API.SETTINGS, ...params } });
}

module.exports = { getPublicCharacters };
