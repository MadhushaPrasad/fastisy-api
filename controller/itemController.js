const { v4: uuidv4 } = require('uuid');
let items = require('../Items');

const getAllItems = (req, res) => {
  res.send(items);
};

const getItem = (req, res) => {
  //get single items
  const { id } = req.params;
  const item = items.find((item) => item.id === id);
  res.send(item);
};

const addItem = (req, res) => {
  //add single items
  const { name } = req.body;
  const item = {
    id: uuidv4(),
    name,
  };
  items = [...items, item];

  res.code(201).send(item);
};

module.exports = {
  getAllItems,
  getItem,
  addItem,
};
