import express from 'express'
import cors from 'cors'
// importamos conección a DB
import db from './database/db.js'
// importamos enrutador
import blogRoutes from './routes/blog.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conección existosa')
} catch (error) {
    console.error(`Error al conectar existosa ${error}`)
    
}
app.get('/', (req, res) =>{
    res.send('Hola mundo')
})

app.listen(8000, () => {
    console.log('Server running')
})