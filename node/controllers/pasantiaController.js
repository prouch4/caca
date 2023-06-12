//importamos el Modelo
import pasantiaModel from "../models/pasantiaModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
/*export const getAllpasantias = async (req, res) => {
    try {
        const pasantias = await pasantiaModel.findAll()
        res.json(pasantias)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getPasantia = async (req, res) => {
        try {
            const pasantia = await pasantiaModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(pasantia[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createPasantia = async (req, res) => {
    try {
       await pasantiaModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updatePasantia = async (req, res) => {
    try {
        await pasantiaModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deletePasantia = async (req, res) => {
    try {
        await pasantiaModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}*/