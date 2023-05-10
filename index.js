const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require ('./db/conn')
const Usuario = require('./models/Usuario')

const PORT = 3000
const hostname = 'localhost'

// =========================config express=============================    
app.use(express.urlenconded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
// =================config express-handlebars==========================
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
// ==================================================================== 



// ==================================================================== 
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`servidor rodando ${hostname}:${PORT}`)
    })
}).catch((error)=>{
    console.error('Erro de conexão com o DB' +error)
})
