const path=require('path')
const fs=require('fs')
const {v4:uuid}=require('uuid')
const cloudinary=require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL)

const subirArchivo=async(files,extencionesValidas=['jpg','png','jpeg'])=>{
    
   return new Promise(async(resolve,reject)=>{
    
    if (!files || Object.keys(files).length === 0|| !files.imag) {
        return reject('No files were uploaded.');
        ;
    }
    const {imag} = files;
console.log(imag)
const nombreCortado=imag.name.split('.')
const extencion=nombreCortado[nombreCortado.length-1]

 
if(!extencionesValidas.includes(extencion)){
    return reject(`La extencion no es permitida, ${extencionesValidas}`)
}
    const nombTemp=uuid()+'.'+extencion
  //uploadPath = path.join(__dirname, '../uploads/' , nombTemp)
   const {tempFilePath}=imag
   imag.name=nombTemp
   try{
      const data=await cloudinary.uploader.upload(tempFilePath)
      fs.unlink(tempFilePath)
      resolve(data.secure_url)
    }catch(error){
      reject(error)
    }


  // imag.mv(uploadPath, function(err) {
  //   if (err) {
  //       console.log(err)
  //     return reject(err);
  //   }

  //   return resolve(uploadPath);
  // });

    })
    
    
}

module.exports={
    subirArchivo
}