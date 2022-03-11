const {Schema,model}=require('mongoose')

const SubcategoriaSchema= Schema({
    
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    categoria:{
        type:Schema.Types.ObjectId,
        ref:'Categoria',
        require:true
    }
})

module.exports=model('Subcategoria',SubcategoriaSchema)