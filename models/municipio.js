const {Schema,model}=require('mongoose')

const MunicipioSchema=Schema({
    nombre:{
        type:String,
        require:[true,'El municipio es requerido']
    }
})

module.exports=model('Municipio',MunicipioSchema)