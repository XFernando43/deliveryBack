const User = require('../models/user');

module.exports = {
    async getAll(req,res,next){
        try{
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(201).json(data);
        }catch(error){
            console.log(`Error ${error}`);
            res.status(501).json({
                success:false,
                message: "Error al obtener usuarios",
            });
        }
    }
}