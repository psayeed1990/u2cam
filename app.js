const express = require('express');
const path = require('path');
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
const authController = require('./controllers/authController');
const errorController = require('./controllers/errorController');

//load routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const postRoutes = require('./routes/postRoutes');
const cartRoutes = require('./routes/cartRoutes');


//enable proxy
app.enable('trust-proxy');

//cors
app.use(cors());
app.options('*', cors());

//public static folder
//app.use(express.static(path.join(__dirname, 'public')));

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
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

//Database request sanitize against nosql injection
app.use(mongoSanitize());

// Data clean against xss attack
app.use(xss());

//prevent parameter pollution
app.use(hpp());

app.use(compression());

//isLogged in
//app.use(authController.isLoggedIn());
//routes

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/carts', cartRoutes);
app.use('/api/v1/users', userRoutes);

// 404
app.all('*', (req, res, next) => {
  res.send('Not found');
});

//error controller
app.use(errorController);

//export app
module.exports = app;
