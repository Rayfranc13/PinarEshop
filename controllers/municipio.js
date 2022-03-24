const { MunicipioSchema:Municipio } = require("../models")



const getMunicipio=async(req,res)=>{
const municipios=await Municipio.find()
res.json({
municipios
})
}


const postMunicipio=async(req,res)=>{
const nombre=req.body.nombre.toUpperCase()
const municipio= new Municipio({nombre})
try{
  await  municipio.save()
}catch(e){
    res.status(400).json({
        message:'Ha habido un error',
            e
            }
    )
}

res.json({
    message:'El municipio ha sido insertado',
    municipio
})
}

const putMunicipio=async(req,res)=>{
    const {id}=req.params
    const nombre=req.body.nombre.toUpperCase()
    const municipio=await Municipio.findByIdAndUpdate(id,{nombre:nombre})
    res.json({
        message:'El municipio se ha actualizado con exito',
        municipio
    })
}

const deleteMunicipio=async(req,res)=>{
    const {id}=req.params
    const municipio= await Municipio.findByIdAndDelete(id)
    res.json({
        message:'El municipio se ha eliminado con exito',
        municipio
    })
    }


module.exports={
    getMunicipio,
    postMunicipio,
    putMunicipio,
    deleteMunicipio
}

