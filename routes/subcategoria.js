const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const {getSubcategoria,postSubcategoria,putSubcategoria,deleteSubcategoria}=require('../controllers/subcategoria');
const { isAdmin } = require('../middlewares/permisos');
const {existeSubcategoriaByNombre,existeSubcategoriaById,existeCategoriaById,existeCategoriaByNombre} = require('../helpers/db_validator');
const router=Router()

router.get('/',[
    validarToken,
    isAdmin
],getSubcategoria)


router.post('/',[
    validarToken,
    isAdmin,
    check('categoria','El id no es valido').isMongoId(),
    check('categoria').custom(existeCategoriaById),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeSubcategoriaByNombre),
    validarCampos
],postSubcategoria)


router.put('/:id',[
    validarToken,
    isAdmin,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeSubcategoriaById),
    check('categoria','El id no es valido').isMongoId(),
    check('categoria').custom(existeCategoriaById),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeSubcategoriaByNombre),
    validarCampos
],putSubcategoria)


router.delete('/:id',[
    validarToken,
    isAdmin,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeSubcategoriaById),
    validarCampos
],deleteSubcategoria)


module.exports=router