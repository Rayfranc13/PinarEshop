const jwt=require('jsonwebtoken')

const  bcrypt=require('bcryptjs')
const Usuario=require('../models/usuario')


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

const  singUp= async(req,res)=>{
    const {nombre,apellido,correo,password,rol,telefono}=req.body
    const exist= await Usuario.find({correo})
    if(exist){
        res.json({
            msg:'El correo ya esta registrado'
        })
    }
    const usuario=new Usuario({nombre,apellido,correo,rol,telefono})
    const salt =bcrypt.genSaltSync()
   
    usuario.password=bcrypt.hashSync(password,salt)

    try{
    await usuario.save();
    }
    catch(e){
    res.status(400).json({
    message:'Ha habido un error',
        e
        }
    )
    }
    return res.json(
    {
        message:'El usuario se ha insertado',
        usuario
    })
}

module.exports={
logIn,
singUp

}