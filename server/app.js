const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Routes.
const APIRoutes = require('./routes/api');

const seedDB = require('./seeds');

// DB setup.
mongoose.connect('mongodb://localhost:27017/rupbasan_blitar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error: '));
db.on('open', () => console.log('Successfully connected to the Database.'));

// Middlewares and configurations.
app.set('port', process.env.PORT || 3500);
app.use(cors());
app.use(morgan('dev'));
app.use('/api', APIRoutes);

// DB seeding
// seedDB();

// ROUTES
app.get('/', async (req, res) => {
  try {
    res.send('Root');
  } catch (err) {
    console.error(err);
  }
});

app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${app.get('port')}...`);
});
