const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': async (req, res) => {
        try{
            const medios = await db.Medio.findAll()
                res.status(200).json({
                    ok: true,
                    total: medios.length,
                    data: medios
                })
        }
        catch(err){
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    }
}
module.exports = mediosAPIController;