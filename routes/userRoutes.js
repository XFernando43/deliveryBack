const userController = require('../controller/usersController');

module.exports = (app)=>{
    app.get('/api/users/getAll', userController.getAll);

    app.post('/api/users/create', userController.register);
}