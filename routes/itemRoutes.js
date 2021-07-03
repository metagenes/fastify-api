const items = require('../items');
const {getItems, getItem, addItem, deleteItem, updateItem } = require('../controllers/itemController')
// item schema
                const Item = {
                    type: 'object',
                    properties: {
                        id: {type: 'string'},
                        name: {type: 'string'}
                    },
                }

// options for get all items
const getItemsopts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            },
        },
    },
    handler: getItems
}
const getItemOpts = {
    schema: {
        response: {
            200: Item,
        }
    },
    handler: getItem
}

const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {type: 'string'}
            }
        },
        response: {
            201: Item
        }
    },
    handler: addItem
}

const deleteItemOpts = {
    schema: {
        response: {
            201: {
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            }
        }
    },
    handler: deleteItem
}

const updateItemOpts = {
    schema: {
        response: {
            200: Item,
        }
    },
    handler: updateItem
}

function itemRoutes (fastify, options, done) {

    //Get all items
    fastify.get('/items', getItemsopts)
    
    //Get single items
    fastify.get('/items/:id', getItemOpts)

    //Add item
    fastify.post('/items', postItemOpts)

    //Delete item
    fastify.delete('/items/:id', deleteItemOpts)

    fastify.put('/items/:id', updateItemOpts)

    done()
}

module.exports = itemRoutes