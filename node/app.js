import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import router from './routes/routes.js'
import { getAlumno } from "./controllers/alumnoController.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/alumno', router)
app.use('/pasantia', router)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.get('./alumno', (req, res)=>{
    res.send(getAlumno)
}) 

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})