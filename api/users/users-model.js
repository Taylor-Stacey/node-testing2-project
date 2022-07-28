const db = require('../../data/dbConfig')

function find() {
    return db('users')
}
function findById(id) {
    return db('users').where('id', id).first();
}
async function add(user) {
    const [id] = await db('users').insert(user);
    return getById(id);
}

module.exports = {
    find,
    findById,
    add
}