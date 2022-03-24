const path=require('path')
const {v4:uuid}=require('uuid')

const subirArchivo=async(files,extencionesValidas=['jpg','png','jpeg'])=>{
    
   return new Promise((resolve,reject)=>{
    
    if (!files || Object.keys(files).length === 0|| !files.imag) {
        return reject('No files were uploaded.');
        ;
    }
    const {imag} = files;

const nombreCortado=imag.name.split('.')
const extencion=nombreCortado[nombreCortado.length-1]

 
if(!extencionesValidas.includes(extencion)){
    return reject(`La extencion ${extencion} no es permitida, ${extencionesValidas}`)
}
    const nombTemp=uuid()+'.'+extencion
  uploadPath = path.join(__dirname, '../uploads/' , nombTemp)

  imag.mv(uploadPath, function(err) {
    if (err) {
        console.log(err)
      return reject(err);
    }

    return resolve(uploadPath);
  });

    })
    
    
}

module.exports={
    subirArchivo
}