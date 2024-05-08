const gamesRouter = require('express').Router();
const { 
  sendAllGames, 
  sendGameCreated,
  sendGameById,
  sendGameUpdated
} = require('../controllers/games');
const { 
  findAllGames, 
  createGame,
  findGameById,
  updateGame
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

gamesRouter.put(
  '/games/:id',
  updateGame,
  sendGameUpdated
)

module.exports = gamesRouter;