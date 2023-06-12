//importamos el Modelo
/*import alumnoModel from "../models/alumnoModel.js";

//** Métodos para el CRUD 

//Mostrar todos los registros
export const getAllalumno = async (req, res) => {
    try {
        const alumno = await alumnoModel.findAll()
        res.json(alumno)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getAlumno = async (req, res) => {
        try {
            const alumno = await alumnoModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(alumno[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createAlumno = async (req, res) => {
    try {
       await alumnoModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateAlumno = async (req, res) => {
    try {
        await alumnoModel.update(req.body, {
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
export const deleteAlumno = async (req, res) => {
    try {
        await alumnoModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}*/