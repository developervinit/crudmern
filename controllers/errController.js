
module.exports =  (err, req, res, next) => {
    if(err.name === "MongoServerError" && err.code === 11000){
         handleDuplicateKeyError(err, res);
    }

    // const field =  Object.keys(err.keyValue);
    // console.log(field[0]);
    //if(err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);

    next();
}

const handleDuplicateKeyError = (err, res) => {
    const field = Object.keys(err.keyValue);
    const code = 409;
    if(field[0] === "email"){
        res.setHeader('Content-Type', 'application/json');
        res.status(code).send(`An account with that ${field[0]} ID already exists.`);
    }else if(field[0] === "phone"){
        res.setHeader('Content-Type', 'application/json');
        res.status(code).send(`An account with that ${field[0]} number already exists.`);
    }
    //res.status(code).send(`An account with that ${field} already exists.`);
    Error.captureStackTrace(this, this.constructor);
 }