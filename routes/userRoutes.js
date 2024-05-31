const userController = require('../controller/usersController');

module.exports = (app)=>{
    app.get('/api/users/getAll', userController.getAll);
}