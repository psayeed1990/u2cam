const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const app = express();

//load controller
//const authController = require('./controllers/authController');
const errorController = require('./controllers/errorController');

//load routes
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

//enable proxy
app.enable('trust-proxy');

//cors
app.use(cors());
app.options('*', cors());

//set security http header
app.use(helmet());

//rate limit
app.use(
  '*',
  rateLimit({
    max: 10000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many http request, please try again in a hour',
  })
);

//body parser
app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 })
);
app.use(cookieParser());

//Database request sanitize against nosql injection
app.use(mongoSanitize());

// Data clean against xss attack
app.use(xss());

//prevent parameter pollution
app.use(hpp());

app.use(compression());

//log with morgan
app.use(morgan('dev'));

//isLogged in
//app.use(authController.isLoggedIn());
//routes

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admin', adminRoutes);

// set static folder
app.use(express.static('client/out'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'out', 'index.html'));
});

//error controller
app.use(errorController);

//export app
module.exports = app;
