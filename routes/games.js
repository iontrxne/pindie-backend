const gamesRouter = require('express').Router();
const { 
  sendAllGames, 
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted
} = require('../controllers/games');
const { 
  findAllGames, 
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists
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
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  createGame, 
  sendGameCreated
);

gamesRouter.put(
  '/games/:id',
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
)

gamesRouter.delete(
  '/games/:id',
  deleteGame,
  sendGameDeleted
)

module.exports = gamesRouter;
