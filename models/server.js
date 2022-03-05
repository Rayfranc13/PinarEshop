const express=require('express')
const cors=require('cors')
const {dbConnection}=require('../db/configdb')
const router=require('../routes')

//Empezar a Disenar la base de datos



class Server{

    constructor(){
        this.app=express()
        this.port=process.env.PORT
        this.ConectarDB()
        this.Middlewares()
        this.Routes()
        this.Listen()
    }

   async ConectarDB(){
await dbConnection()
    }

    Middlewares(){
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(express.json())
        this.app.use(cors())
    }

    Routes(){
        this.app.use('/auth',require('../routes/auth'))
   this.app.use('/usuario',require('../routes/usuario'))
    }

    Listen(){
    this.app.listen(this.port||5000,()=>{
        console.log(`Servidor en el puerto ${this.port}`)
    })
    }





}



module.exports=Server