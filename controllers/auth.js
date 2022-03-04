const jwt=require('jsonwebtoken')


const logIn=async(req,res)=>{
    const {_id:id,...usuario}=req.usuario

const token=jwt.sign({id},process.env.SECRETKEY,{
    expiresIn:'2h'
})


return res.json({
    message:'El usuario ah accedido con exito',
    usuario,
    token
})

}

const singUp= (req,res)=>{
 
}
module.exports={
logIn,
singUp

}