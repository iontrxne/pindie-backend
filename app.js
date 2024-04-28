const express = require('express');
const path = require('path');
const { PORT } = require('./config');
const { cors } = require('./middlewares/cors');
const bodyParser = require('body-parser');

const app = express();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
)

app.listen(PORT, () => {
  console.log(`Приложение работает на ${PORT} порту`);
});