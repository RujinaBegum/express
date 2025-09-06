const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// In-memory storage
let items = [];
let nextId = 1;

// Reset function for testing (for test files like Jasmine or Jest)
app.resetData = () => {
  items = [];
  nextId = 1;
};

// ✅ POST /api/items - Create a new found item
app.post('/api/items', (req, res) => {
  try {
    const { name, item } = req.body;

    if (!name || !item || name.trim() === '' || item.trim() === '') {
      return res.status(400).json({ error: 'Name and item are required' });
    }

    const newItem = {
      id: nextId++,
      name: name.trim(),
      item: item.trim(),
    };

    items.push(newItem);

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ GET /api/items - Return all stored items
app.get('/api/items', (req, res) => {
  try {
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app; // For testing (e.g., Jasmine/Jest)
