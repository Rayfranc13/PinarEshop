const{check}=require('express-validator')
const { options } = require('../routes')

const nombreOpc=(arg)=>{
if(arg){
    check(arg,'El argumanto no es valido').isLength({min:3})
}
}