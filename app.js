const express = require('express');
const path = require('path');
const PORT = require('./config');
const cors = require('./middlewares/cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const pagesRouter = require('./routes/pages');
const connectToDatabase = require('./database/connect');
const cookieParser = require("cookie-parser");

const app = express();

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
)

app.listen(PORT, () => {
  console.log(`Приложение работает на ${PORT} порту`);
});