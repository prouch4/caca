import express from 'express'
//import { getAllalumno, getAlumno, createAlumno, updateAlumno, deleteAlumno } from '../controllers/alumnoController.js'
//import { getAllpasantias, getPasantia, createPasantia, updatePasantia, deletePasantia } from '../controllers/pasantiaController.js'
import connection from '../database/db.js'
const router = express.Router()

/*router.get('/', getAllalumno)
router.get('/:id', getAlumno)
router.post('/', createAlumno)
router.put('/:id', updateAlumno)
router.delete('/:id', deleteAlumno)*/

/*router.get('/', getAllpasantias)
router.get('/:id', getPasantia)
router.post('/', createPasantia)
router.put('/:id', updatePasantia)
router.delete('/:id', deletePasantia)*/



router.get('/getAllalumno', (req, res) => {
    const query = 'SELECT * FROM alumno';
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).json({ error: 'Error al ejecutar la consulta' });
      } else {
        console.log('Resultados de la consulta:', results);
        res.json(results);
      }
    });
  });

export default router