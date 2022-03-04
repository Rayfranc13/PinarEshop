const express=require('express')
const cors=require('cors')
const {dbConnection}=require('../db/configdb')





class Server{

    constructor(){
        this.app=express()
        this.port=process.env.PORT
        this.ConectarDB()
        this.Middlewares()
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

    Listen(){
    this.app.listen(this.port||5000,()=>{
        console.log(`Server on port ${this.port}`)
    })
    }





}



module.exports=Server