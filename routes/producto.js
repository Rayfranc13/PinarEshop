const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const { isAdmin } = require('../middlewares/permisos');
const { existeCategoriaById,existeCategoriaByNombre, existeSubcategoriaById } = require('../helpers/db_validator');
const adminVendPermisos = require('../middlewares/localPermisos');
const { getProducto, postProducto } = require('../controllers/producto');
const router=Router()

router.get('/',[
    validarToken,
],getProducto)


router.post('/',[
    validarToken,
    adminVendPermisos,
    check('nombre','El nombre es obligatorio').notEmpty(),
    check('descripcion','La descripcion es requerida').notEmpty(),
    check('descripcion','La descripcion debe tener entre 20 y 300 caracteres').isLength({max:300,min:20}),
    check('subcategoria','La subcategoria no es valida').isMongoId(),
    check('subcategoria').custom(existeSubcategoriaById),
    check('precio','El precio no es valido').isFloat(),
    check('cant','La cantidad es un numero entero').isInt(),
    validarCampos
],postProducto)



module.exports=router