const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    'list': async (req, res) => {
        try{
            const canciones = await db.Cancion.findAll()
            res.status(200).json({
                ok: true,
                total: canciones.length,
                data: canciones
            });
        }
        catch(err){
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    }
}
module.exports = cancionesAPIController;