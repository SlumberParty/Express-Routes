const { Router } = require('express');

const items = [];

module.exports = Router()
  .post('/api/v1/items', (req, res) => {
    const {
      glitter,
      adhesive,
      deployment
     } = req.body;

  const item = {
    glitter,
    adhesive,
    deployment
  };

  items.push(item);
  res.send(item);
})

.get ('/api/v1/items', (req, res) => {
  res.send(items);
})

