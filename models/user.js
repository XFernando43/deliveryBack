const db = require('../config/config');

const Users = {};

Users.getAll = () =>{
    const sql = 'SELECT * FROM USERS'

    return db.manyOrNone(sql);
}

module.exports = Users;
