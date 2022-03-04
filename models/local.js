const {Schema,model}=require('mongoose')

const LocalSchema=Schema({
    nombre:{
        type:String,
        require:[true,'El nombre es requerido']
    },
    municipio:{
        type:Schema.Types.ObjectId,
        ref:'Municipio',
        require:true
    },
    usuario:{
type:Schema.Types.ObjectId,
ref:'Usuario',
require:true
    }
})