const {Schema,model}=require('mongoose')


const ProductoSchema=Schema({
    nombre:{
        type:String,
        require:[true,'El nombre del producto es requerido']
    },
    descripcion:{
        type:String,
        require:[true,'La descripcion de el producto es requerida']
    },
    imag:{
        type:String,
        default:'none'
    },
    subcategoria:{
        type:Schema.Types.ObjectId,
        ref:'Subcategoria',
        require:true
    },
    disponible:{
        type:Boolean,
        default:true,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    cant:{
        type:Number,
        default:0,
        require:true
    },
    usuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        require:true
    }
   
})


module.exports= model('Producto',ProductoSchema)