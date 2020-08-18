const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./passport');
const MongoStore = require('connect-mongo')(session);

const app = express();

require('dotenv').config();

// Routes.
const barangRoutes = require('./routes/barang');
const filtersRoutes = require('./routes/filters');
const userRoutes = require('./routes/user');

const seedDB = require('./seeds');

// DB setup.
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error: '));
db.on('open', () => console.log('Successfully connected to the Database.'));

// Middlewares and configurations.
app.set('port', process.env.PORT || 3500);

// For development purposes.
// app.use(
//   cors({
//     origin: ['http://localhost:3000'],
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );

app.use(morgan('dev'));
app.use(express.json());
app.use(
  session({
    secret: 'Two stones with one bird',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db }),
  })
);
// app.use(function (req, res, next) {
//   console.log('Session', req.session);
//   next();
// });
app.use(passport.initialize());
app.use(passport.session());
app.use('/', express.static('../client/build'));
app.use('/api/barang', barangRoutes);
app.use('/api/filters', filtersRoutes);
app.use('/user', userRoutes);

// DB seeding
// seedDB();

app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${app.get('port')}...`);
});
