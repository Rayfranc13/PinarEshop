




const localPermisos=(req,res,next)=>{
    const roles=['ADMIN_ROLE','VENDEDOR_ROLE']
const {rol}=req.usuario
for (x in roles){
    if(x==rol){
        return next()
    }
} 


    
return res.status(401).json({
        msg:'No tiene acceso a esta accion'
    })

}


module.exports=localPermisos