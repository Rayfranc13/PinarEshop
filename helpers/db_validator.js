const {
    MunicipioSchema:Municipio,
    UsuarioSchema:Usuario,
    CategoriaSchema:Categoria,
    SubcategoriaSchema:Subcategoria
}=require('../models')






//Categorias helpers
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


//Subcategorias helpers
const existeSubcategoriaByNombre=async(nomb)=>{
    const nombre=nomb.toUpperCase()
  const subcategoria= await Subcategoria.findOne({nombre:nombre})
  if(subcategoria){
      throw new Error(`La subcategoria ${nombre} ya existe`)
  }     
}

const existeSubcategoriaById=async(id)=>{
    const subcategoria=await Subcategoria.findById({_id:id})
    if(!subcategoria){
        throw new Error(`La subcategoria de id(${id}) no existe`)
    }
}

//Usuarios Helpers
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

        const existeCorreo=async(correo='')=>{
            const existe= await Usuario.findOne({correo})
            if(existe){
                throw new Error('El correo ya esta registrado')
            }
            }

   //Municipios Helpers
   const existeMunicipioByName=async(nombre)=>{
    const nomb=nombre.toUpperCase()
    const municipio= await Municipio.findOne({nombre:nomb})
    if(municipio){
        throw new Error(`El municipio ${nomb} ya existe`)
    }     
   }

   const existeMunicipioById=async(id)=>{
    const existe= await Municipio.findOne({_id:id})
    if(!existe){
        throw new Error(`El municipio de id(${id}) no existe`)
    }
   }
   

module.exports={
    existeCorreo,
    existeUsuarioById,
    existeActiveUsuarioById,
    existeCategoriaById,
    existeCategoriaByNombre,
    existeSubcategoriaByNombre,
    existeSubcategoriaById,
    existeMunicipioByName,
    existeMunicipioById
}