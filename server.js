const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  console.log(err);
  process.exit(1);
});

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
const PORT = process.env.PORT || 5002;
app.timeout = 0;
const server = app.listen(PORT, () =>
  console.log(`${process.env.PROJECT_NAME} Server started at ${PORT}`)
);

server.headersTimeout = 10 * 60 * 1000;

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
