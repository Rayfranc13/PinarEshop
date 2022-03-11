const Categoria=require('../models/categoria')


const getCategoria=async(req,res)=>{
const categorias=await Categoria.find()
  res.json({
    categorias
})
}

const postCategoria=async(req,res)=>{
const {nombre}=req.body
const categoria=new Categoria({nombre})

try{
    await categoria.save();
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
            categoria
        })
}

const putCategoria=async(req,res)=>{
    const categorias=await Categoria.find()
      res.json({
        msg:'si'
    })
    }

    const deleteCategoria=async(req,res)=>{
        const categorias=await Categoria.find()
          res.json({
            msg:'no'
        })
        }





module.exports={
    getCategoria,
    postCategoria,
    deleteCategoria,
    putCategoria
}