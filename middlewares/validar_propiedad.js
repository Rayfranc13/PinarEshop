const propiedadUsuario=async(req,res,next)=>{
  const {id}=req.params
  const usuario=req.usuario
  const bool=(id==usuario._id)
  if(!bool){
    return res.json({
        message:'No esta autorizado para esta operacion',
        
       
    })
  } 
 return next()
}

module.exports={
    propiedadUsuario
}