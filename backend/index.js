const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({ path: './config/.env'});

const app = express();
app.use(cors());
const port = process.env.PORT || 666;


/*
** ROUTES
*/
const systemRouter = require('./routes/system.route');
const trombiRouter = require('./routes/trombi.route');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/*
** MIDDLEWARES
*/
app.use('/health', systemRouter);
app.use('/trombi', trombiRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Start frontend app at http://localhost:${port}`)
});
