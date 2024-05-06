const gamesRouter = require('express').Router();
const { sendAllGames, sendGameCreated } = require('../controllers/games');
const { findAllGames, createGame } = require('../middlewares/games');

gamesRouter.get(
  '/games', 
  findAllGames, 
  sendAllGames
);

gamesRouter.post(
  '/games', 
  findAllGames, 
  createGame, 
  sendGameCreated
);

module.exports = gamesRouter;