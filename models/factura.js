const {Schema,model}=require('mongoose')

const FacturaSchema=Schema({
    nombre_rec:{
        type:String,
        require:[true,'El nombre de a quien se le entrega es requerido'],
    },
    apellidos:{
        type:String,
        require:[true,'Los apellidos de a quien se le entrega son requeridos']
    },
    direccion_env:{
        type:String,
        require:[true,'La direccion de a quien se le envia es requerida']
    },
    id_usuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true,
    }
    
})

FacturaSchema.methods.toJSON=function (){

    const {__v,...factura}= this.toObject()
 return factura
 }

module.exports= model('Factura',FacturaSchema)