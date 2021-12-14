
module.exports =  (err, req, res, next) => {
    if(err.code && err.code === 11000){
         handleDuplicateKeyError(err, res);
         return next();
    }
}

const handleDuplicateKeyError = (err, res) => {
    
    const field = Object.keys(err.keyValue);
    if(field[0] === "email"){
         res.status(409).json({  
            message: `An account with that ${field[0]} Id already exists.`
         })

    }else if(field[0] === "phone"){
        res.status(409).json({
            message: `An account with that ${field[0]} number already exists.`
        })
    }
 }