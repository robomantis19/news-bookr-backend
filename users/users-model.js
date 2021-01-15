const db = require('../database/dbConfig.js'); 


module.exports = { 
    find, 
    add, 
    findBy,
    getUserById,
    addOrders, 
    findOrdersById
}

async function find(){
    return db('users').select('id', 'username'); 
}
async function findBy(email){ 
    console.log('findBy email', email)
    let users = await db('users').where(email).first(); 
    return users; 
}

async function add(user) { 
    //come back to this line, where error is.
    const [id] = await db('users').insert(user).returning('id');
    console.log('id', id); 
    return getUserById(id); 
}

async function getUserById(id){ 
    return db('users')
        .where({id})
        .first(); 
}

async function addOrders(input, urlId){
    console.log('model addOrder input', input)
    const [id] = await db('Favorites').insert(input).returning('id');
    console.log('id: ', id)
    return await findOrdersById(id, urlId)
}

async function findOrdersById(OrderId, userUrlId){
    console.log('FavoritesId: ', OrderId)
    console.log('userUrlId: ', userUrlId)
    let orders = await db('Favorites as F')
    .join('users as U', 'U.id', 'F.user_id').where('F.user_id', Number(userUrlId))
    .select('F.id', 'F.image', 'F.title', 'F.description', 'F.starRating', 'F.user_id')
    .where('F.id', OrderId)
    return orders
}

