const crypto = require('crypto');

const GET_HASH = () => {
  const ts = +(new Date);
  const apiKey =  process.env.MARVEL_PUBLIC_KEY;
  const privateKey = process.env.MARVEL_PRIVATE_KEY;
  const msg = ts + privateKey + apiKey;
  return {
    ts,
    hash: crypto.createHash('md5').update(msg).digest("hex"),
  };
}

const MARVEL_API = {
  BASE_URL: 'http://gateway.marvel.com/v1/public',
  CHARACTERS: {
    GET: 'characters',
  },
}

const MARVEL_SETTINGS = {
    apikey: process.env.MARVEL_PUBLIC_KEY,
    ...GET_HASH(),
};

module.exports = {
  MARVEL_API,
  MARVEL_SETTINGS
};