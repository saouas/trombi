const marvelService = require('../services/marvel');
const { getCharacterNameAndImage } = require('../utils/utils');

const getUsers = async  (req, res, next) => {
  try {
    const { offset } = req?.query;

    if(offset != undefined && isNaN(offset))
      throw new Error('Please provide a correct offset query param');

    if(!process.env.MARVEL_PUBLIC_KEY || !process.env.MARVEL_PRIVATE_KEY)
      throw new Error('Cannot connect to MarvelService without minimum config');    

    const users = await marvelService.getPublicCharacters({offset});
    if(users?.status === 200)
    {
      const { data : { data: { results, count, total } } } = users;
      const cleanData = getCharacterNameAndImage(results);
      const finalOffset = offset ? parseInt(offset) + parseInt(count) : parseInt(count);
      res.json({...cleanData, offset: finalOffset, total}).status(200);
    }
    else{
      return res.json({
        status: "error",
        message: "something went wrong with Marvel 😿"
      }).status(users?.status);
    }
  } catch(err){
    console.log(err);
    next(err);
  }
};

module.exports = {
  getUsers,
}
