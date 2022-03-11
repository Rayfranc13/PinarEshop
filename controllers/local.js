const Local=require('../models/local')



const getLocal=(req,res)=>{
    const {_id:usuario}=req.usuario
    const local=Local.find({usuario})
    return res.json({
        msg:'Implementar get',
        local
    })
}

const postLocal=(req,res)=>{
    const {nombre}=req.body
return res.json({
    msg:'Implementar post'
}
)
}

const putLocal=(req,res)=>{
    return res.json({
        msg:'Implementar put'
    }
    )
}

const deleteLocal=(req,res)=>{
    return res.json({
        msg:'Implementar delete'
    })
}

module.exports={
    getLocal,
    postLocal,
    putLocal,
    deleteLocal,
}