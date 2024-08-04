// routes/artists.js

const express = require('express');
const router = express.Router();
const Artist = require('../models/artist');

// Отримання всіх артистів
router.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Створення нового артиста
router.post('/artists', async (req, res) => {
  try {
    const newArtist = new Artist(req.body);
    await newArtist.save();
    res.status(201).json(newArtist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Отримання артиста за ID
router.get('/artists/:id', async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artist not found' });
    res.json(artist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Оновлення артиста за ID
router.put('/artists/:id', async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!artist) return res.status(404).json({ message: 'Artist not found' });
    res.json(artist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Видалення артиста за ID
router.delete('/artists/:id', async (req, res) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artist not found' });
    res.json({ message: 'Artist deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
