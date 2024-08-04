const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/meladicloud';
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Налаштування strictQuery
mongoose.set('strictQuery', true); // або false, залежно від ваших потреб

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Підключення маршрутів
const artistRoutes = require('./routes/artists');
app.use('/api', artistRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to melAdi.cloud API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
