const { Router } =require("express");
const { check } = require("express-validator");
const {getLocal,postLocal,putLocal,deleteLocal}=require('../controllers/local')
const localPermisos=require('../middlewares/localPermisos');
const { validarToken } = require("../middlewares/validarToken");
const router=Router()

router.get('/',[
    validarToken,
    localPermisos
],getLocal)

router.post('/',[
    validarToken,
    localPermisos
],
postLocal)

router.put('/:id',[
    validarToken,
    localPermisos
],putLocal)

router.delete('/:id',[
    validarToken,
    localPermisos
],deleteLocal)






module.exports=router
