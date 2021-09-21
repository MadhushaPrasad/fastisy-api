const {
  getAllItems,
  getItem,
  addItem,
} = require('../controller/itemController');

const item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
    price: { type: 'number' },
    image: { type: 'string' },
  },
};

//options for get all items
const getItemsOptions = {
  schema: {
    response: {
      200: {
        description: 'Success',
        type: 'array',
        items: item,
      },
    },
  },
  handler: getAllItems,
};

//get SIngle item options
const getItemOptions = {
  schema: {
    response: {
      200: item,
    },
  },

  handler: getItem,
};

//post SIngle item options
const postItemOptions = {
  schema: {
    response: {
      200: item,
    },
  },

  handler: addItem,
};

function itemRoutes(fastify, option, done) {
  //get all items
  fastify.get('/items', getItemsOptions);

  //get single item
  fastify.get('/items/:id', getItemOptions);

  //add item
  fastify.post('/items', postItemOptions);

  done();
}

module.exports = itemRoutes;
