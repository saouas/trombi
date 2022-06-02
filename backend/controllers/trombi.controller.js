const { randomUUID } = require('crypto');
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
      res.status(200).json([...cleanData, {offset: finalOffset, total}]);
    }
    else{
      return res.status(users?.status).json({
        status: "error",
        message: "Oops please try again"
      });
    }
  } catch(err){
    console.log(err);
    return res.status(400).json({
      status: "error",
      message: "something went wrong with Trombi, please contact admin",
      correlation_id: randomUUID()
    })
    next(err);
  }
};

module.exports = {
  getUsers,
}
