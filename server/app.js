const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

require('dotenv').config();

// Routes.
const barangRoutes = require('./routes/barang');
const filtersRoutes = require('./routes/filters');
const artikelRoutes = require('./routes/artikel');

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
app.use(cors());
app.use(morgan('dev'));
app.use('/api/barang', barangRoutes);
app.use('/api/filters', filtersRoutes);
app.use('/api/artikel', artikelRoutes);

// DB seeding
// seedDB();

app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${app.get('port')}...`);
});
