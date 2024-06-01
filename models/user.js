const db = require("../config/config");
const Users = {};

Users.getAll = () => {
  const sql = "SELECT * FROM USERS";
  return db.manyOrNone(sql);
};

Users.create = (user) => {
  const sql = `
    INSERT INTO 
    users(
        email, 
        name, 
        lastname, 
        phone, 
        image, 
        password, 
        is_avaliable, 
        session_token, 
        created_at, 
        updated_at
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`;

  return db.oneOrNone(sql, [
    user.email,
    user.name,
    user.lastname,
    user.phone,
    user.image,
    user.password,
    user.is_avaliable,
    user.session_token,
    user.created_at,
    user.updated_at,
  ]);
};

module.exports = Users;
