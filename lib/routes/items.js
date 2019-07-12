const { Router } = require('express');

const items = [];

module.exports = Router()
  .post(`/api/v1/items`, (req, res) => {
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

.get ('/', (req, res) => {
  res.send(items);
})

.get('/:id', (req, res) => {
  res.send(items[req.params.id]);
})

.put('/:id', (req, res) => {
  const {
    glitter,
    adhesive,
    deployment
  } = req.body;

  const updatedItem = {
    glitter,
    adhesive,
    deployment
  };

  items[req.params.id] = updatedItem;

  res.send(items[req.params.id]);
})

.delete('/:id', (req, res) => {
  const deleted = items.splice(req.params.id, 1);
  res.send(deleted[0]);
});