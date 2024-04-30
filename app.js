const express = require('express');
const path = require('path');
const PORT = require('./config');
const cors = require('./middlewares/cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');
const connectToDatabase = require('./database/connect');

const app = express();

connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  usersRouter,
  gamesRouter,
  categoriesRouter
)

app.listen(PORT, () => {
  console.log(`Приложение работает на ${PORT} порту`);
});