const {Router}=require('express')
const {check}=require('express-validator')
const { cargarArchivo } = require('../controllers/uploads')
const router=Router()
const {validarCampos}=require('../middlewares/validar_campos')



router.post('/',cargarArchivo)

module.exports=router