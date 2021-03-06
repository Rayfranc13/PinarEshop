const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const {getCategoria,postCategoria,putCategoria,deleteCategoria}=require('../controllers/categoria');
const { isAdmin } = require('../middlewares/permisos');
const { existeCategoriaById,existeCategoriaByNombre } = require('../helpers/db_validator');
const adminVendPermisos = require('../middlewares/localPermisos');
const router=Router()

router.get('/',[
    validarToken,
],getCategoria)


router.post('/',[
    validarToken,
    adminVendPermisos,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
],postCategoria)


router.put('/:id',[
    validarToken,
    adminVendPermisos,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
],putCategoria)


router.delete('/:id',[
    validarToken,
    isAdmin,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
],deleteCategoria)


module.exports=router