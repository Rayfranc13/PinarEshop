const {Schema,model}=require('mongoose')

const PedidoSchema=Schema({
    id_prod:{
        type:String,
        require:[true,'El producto no es valido']
    },
    cant_prod:{
        type:Number,
        require:[true,'La cantidad del pedido no es valida'],
        default:1
    },
    id_factura:{
        type:Schema.Types.ObjectId,
        ref:'Factura',
        require:true
    }
})

PedidoSchema.methods.toJSON=function (){

 const {__v,...pedido}= this.toObject()
 return pedido
 }

 module.exports= model('Pedido',PedidoSchema)