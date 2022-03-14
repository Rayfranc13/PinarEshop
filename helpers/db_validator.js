const Usuario=require('../models/usuario')
const Categoria=require('../models/categoria')
const existeCorreo=async(correo='')=>{
const existe= await Usuario.findOne({correo})
if(existe){
    throw new Error('El correo ya esta registrado')
}
}



const existeCategoriaByNombre=async(nomb)=>{
    const nombre=nomb.toUpperCase()
  const categoria= await Categoria.findOne({nombre:nombre})
  if(categoria){
      throw new Error(`La categoria ${nombre} ya existe`)
  }     
}

const existeCategoriaById=async(id)=>{
    const categoria=await Categoria.findById({_id:id})
    if(!categoria){
        throw new Error(`La categoria de id(${id}) no existe`)
    }
}


const existeUsuarioById=async(id)=>{
    const existe= await Usuario.findOne({_id:id})
    if(!existe){
        throw new Error(`El usuario de id(${id}) no existe`)
    }
    }

    const existeActiveUsuarioById=async(id)=>{
        const existe= await Usuario.findOne({estado:true,_id:id})
        if(!existe){
            throw new Error(`El usuario de id(${id}) no existe`)
        }
        }

   

module.exports={
    existeCorreo,
    existeUsuarioById,
    existeActiveUsuarioById,
    existeCategoriaById,
    existeCategoriaByNombre
}