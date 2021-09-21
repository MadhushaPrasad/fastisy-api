const items = require('../Items');

const getAllItems = (req, res) => {
  res.send(items);
};

const getItem = (req, res) => {
  //get single items
  const { id } = req.params;
  const item = items.find((item) => item.id === id);
  res.send(item);
};

module.exports = {
  getAllItems,
  getItem,
};
