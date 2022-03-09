const {Router}=require('express');
const {check}=require('express-validator')
const { logIn, singUp } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar_campos');
const { existUserByEmail} = require('../middlewares/existe_usuario');
const {existeCorreo}=require('../helpers/db_validator')
const router=Router()

router.post('/login',[
    check('correo','El correo no es valido').isEmail(),
    check('password','El password no es valido').not().isEmpty(),
    validarCampos,
    existUserByEmail
],logIn);

router.post('/signup',[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "El nombre no puede ser un numero").isString(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    check("apellido", "El apellido no puede ser un numero").isString(),
    check("correo", "El correo no es valido").isEmail(),
    check("correo").custom(existeCorreo),
    check("password", "El password deve tener al menos 6 caracteres").isLength({
      min: 6,
    }),
    check(
      "password",
      "El password deve tener al menos 6 caracteres"
    ).isStrongPassword(),
    check("rol", "No es un rol valido").isIn(["VENDEDOR_ROLE",'CLIENT_ROLE']),
    check('telefono',"El telefono no es valido").isMobilePhone(),
    validarCampos,
],singUp)







module.exports=router
