import express from 'express'
import { getAllalumno, getAlumno, createAlumno, updateAlumno, deleteAlumno } from '../controllers/alumnoController.js'
import { getAllpasantias, getPasantia, createPasantia, updatePasantia, deletePasantia } from '../controllers/pasantiaController.js'
const router = express.Router()

router.get('/', getAllalumno)
router.get('/:id', getAlumno)
router.post('/', createAlumno)
router.put('/:id', updateAlumno)
router.delete('/:id', deleteAlumno)

router.get('/', getAllpasantias)
router.get('/:id', getPasantia)
router.post('/', createPasantia)
router.put('/:id', updatePasantia)
router.delete('/:id', deletePasantia)

export default router
