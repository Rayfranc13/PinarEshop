const {Schema,model}=require('mongoose')

const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    apellido:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'La  contraseña es obligatoria']
    },
    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','VENDEDOR_ROLE','CLIENT_ROLE'],
        default:'CLIENT_ROLE'
    },
    estado:{
        type:Boolean,
        default:true
    },
    telefono:{
        type:String,
    },


})

UsuarioSchema.methods.toJSON=function (){

   const {__v,...usuario}= this.toObject()
return usuario
}


module.exports= model('Usuario',UsuarioSchema)