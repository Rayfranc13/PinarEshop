const Local=require('../models/local')



const getLocal=(req,res)=>{
    const {id:_id}=req.usuario
    
    return res.json({
        msg:'Implementar get',
        id
    })
}

const postLocal=(req,res)=>{
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