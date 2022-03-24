const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const { isAdmin } = require('../middlewares/permisos');
const {existeMunicipioByName,existeMunicipioById } = require('../helpers/db_validator');
const adminVendPermisos = require('../middlewares/localPermisos');
const { getMunicipio, postMunicipio, putMunicipio, deleteMunicipio } = require('../controllers/municipio');
const router=Router()

router.get('/',[
    validarToken,
],getMunicipio)


router.post('/',[
    validarToken,
    adminVendPermisos,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeMunicipioByName),
    validarCampos
],postMunicipio)


router.put('/:id',[
    validarToken,
    adminVendPermisos,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeMunicipioById),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeMunicipioByName),
    validarCampos
],putMunicipio)


router.delete('/:id',[
    validarToken,
    isAdmin,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeMunicipioById),
    validarCampos
],deleteMunicipio)


module.exports=router