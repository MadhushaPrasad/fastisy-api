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
  const { name, description, price, image } = req.body;
  const item = {
    id: uuidv4(),
    name,
    description,
    price,
    image,
  };
  items = [...items, item];

  res.code(201).send(item);
};

const deleteItem = (req, res) => {
  //delete single items
  const { id } = req.params;
  items.filter((item) => item.id !== id);
  res.send({ message: `Item ${id} has been deleted` });
};

const updateItem = (req, res) => {
  //update single items
  const { id } = req.params;

  const { name, description, price, image } = req.body;

  items = items.map((item) =>
    item.id === id ? { id, name, description, price, image } : item
  );

  let item = items.find((item) => item.id === id);

  res.send(item);
};
module.exports = {
  getAllItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
};
