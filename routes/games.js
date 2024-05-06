const gamesRouter = require('express').Router();
const { 
  sendAllGames, 
  sendGameCreated,
  sendGameById
} = require('../controllers/games');
const { 
  findAllGames, 
  createGame,
  findGameById 
} = require('../middlewares/games');

gamesRouter.get(
  '/games', 
  findAllGames, 
  sendAllGames
);

gamesRouter.get(
  "/games/:id",
  findGameById, 
  sendGameById,
); 

gamesRouter.post(
  '/games', 
  findAllGames, 
  createGame, 
  sendGameCreated
);

module.exports = gamesRouter;