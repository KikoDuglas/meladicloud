// models/artist.js

const mongoose = require('mongoose');

// Створення схеми для артиста
const artistSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Ім'я артиста
  bio: { type: String, default: '' },      // Біографія
  avatar: { type: String, default: '' },   // Посилання на аватар
  tracks: { type: [String], default: [] }, // Масив треків (можуть бути ID або назви)
});

// Створення моделі на основі схеми
const Artist = mongoose.model('Artist', artistSchema);

// Експорт моделі для використання в інших частинах програми
module.exports = Artist;
