const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const {getCategoria,postCategoria,putCategoria,deleteCategoria}=require('../controllers/categoria')
const router=Router()

router.get('/',[
    validarToken
],getCategoria)


router.post('/',[
    validarToken,
    check('nombre','El nombre es obligatorio').not().isEmpty()
],postCategoria)


router.put('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
    check('nombre','El nombre es obligatorio').not().isEmpty()
],putCategoria)


router.delete('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
],deleteCategoria)


module.exports=router