const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

//db connect
const mongoose = require('mongoose');
mongoose
  .connect(process.env.DATABASE, {
    useFindAndModify: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('DB connected'));

//require app
const app = require('./app');

//start server
const PORT = process.env.PORT || 8082;
const server = app.listen(PORT, () =>
  console.log(`Faddist Server started at ${PORT}`)
);
