const { subirArchivo } = require('../helpers/subir_archivo')
const {ProductoSchema:Producto}=require('../models')

const getProducto=async(req,res)=>{
    const producto= await Producto.find()
    .populate('subcategoria','nombre')
    .populate('usuario','nombre')
    const cant=await Producto.countDocuments()
    res.json({
        cant,
        producto
    })
}

const postProducto=async(req,res)=>{
    const {...prod}=req.body
    prod.usuario=req.usuario._id
    try{
        const imag=await subirArchivo(req.files)
        prod.imag=imag
    }catch(error){
        if(error=='La extencion no es permitida, jpg,png,jpeg'){
            return res.status(400).json({
                error
            })
        }
       console.log(error)
    }

    const producto=new Producto(prod)
    try{
       await producto.save()
    }catch(e){
        res.json({
           message:'Ha habido un error',
           e
        })
    }
    res.json({
        message:'El producto se ha insertado con exito',
        producto
    })
}
const deleteProducto=async(req,res)=>{
const {_id}=req.params
try{
    const producto=await Producto.findByIdAndDelete(_id)
    res.json({
        msg:'El producto se ha eliminado',
        producto
    })
}catch(error){
    res.status(500).json({
        msg:'Error al eliminar'
    })
}
}
module.exports={
    getProducto,
    postProducto,
    deleteProducto
}