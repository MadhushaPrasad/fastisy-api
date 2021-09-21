const {
  getAllItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
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
    body: {
      type: 'object',
      required: ['name'],
      required: ['description'],
      required: ['price'],
      required: ['image'],
      properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        price: { type: 'number' },
        image: { type: 'string' },
      },
    },
    response: {
      200: item,
    },
  },

  handler: addItem,
};

//Delete SIngle item options
const deleteItemOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },

  handler: deleteItem,
};

//update SIngle item options
const updateItemOptions = {
  schema: {
    response: {
      200: item,
    },
  },

  handler: updateItem,
};

function itemRoutes(fastify, option, done) {
  //get all items
  fastify.get('/items', getItemsOptions);

  //get single item
  fastify.get('/items/:id', getItemOptions);

  //add item
  fastify.post('/items', postItemOptions);

  //delete item
  fastify.delete('/items/:id', deleteItemOptions);

  //update item
  fastify.put('/items/:id', updateItemOptions);

  done();
}

module.exports = itemRoutes;
