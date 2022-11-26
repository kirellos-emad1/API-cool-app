import express from 'express';
import cors from 'cors'
import apiRouter from './routes/apiRouter.js';

const app = express()
const port= "3000"

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use('/API', apiRouter)

app.listen(port, ()=>{
    console.log(`Server started at 'http://localhost:${port}/'`);
})
