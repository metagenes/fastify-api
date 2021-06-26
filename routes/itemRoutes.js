const items = require('../items');
const {getItems, getItem} = require('../controllers/itemController')
// item schema
                const Item = {
                    type: 'object',
                    properties: {
                        id: {type: 'string'},
                        name: {type: 'string'}
                    },
                }

// options for get all items
const getItemsopts ={
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
 
function itemRoutes (fastify, options, done) {

    //Get all items
    fastify.get('/items', getItemsopts)
    
    //Get single items
    fastify.get('/items/:id', getItemOpts)

    done()
}

module.exports = itemRoutes