const {subirArchivo}=require('../helpers/subir_archivo')



const cargarArchivo=async(req,res)=>{

  try{
const pathCompleto=await subirArchivo(req.files,)
res.json({
    pathCompleto
})
}catch(e){
    res.status(400).json({
        error:e
    })
}

}

module.exports={
    cargarArchivo
}