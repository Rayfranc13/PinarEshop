const express=require('express')
const cors=require('cors')
const fileUpload=require('express-fileupload')
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
        this.app.use(express.static('public'))
        this.app.use(fileUpload({
            useTempFiles:true,
            //tempFileDir:'/temp/'
        }))
    }

    Routes(){
        this.app.use('/v2/auth',require('../routes/auth'))
        .use('/',require('../routes/home'))
   .use('/v2/usuario',require('../routes/usuario'))
   .use('/v2/categoria',require('../routes/categoria'))
   .use('/v2/subcategoria',require('../routes/subcategoria'))
   .use('/v2/municipio',require('../routes/municipio'))
   .use('/v2/producto',require('../routes/producto'))
    }

    Listen(){
    this.app.listen(this.port||5000,()=>{
        console.log(`Servidor en el puerto ${this.port}`)
    })
    }





}



module.exports=Server