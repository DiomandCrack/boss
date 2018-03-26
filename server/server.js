const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000',
}))

app.use(cookieParser())

app.use(bodyParser.json())

app.listen(8080,()=>{
    console.log('server run at port:8080')
})