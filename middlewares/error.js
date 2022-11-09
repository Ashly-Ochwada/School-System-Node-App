const {} =  require("sequelize");


function notFound(req, res,next){
    const error = new Error(`Not Found -${req.originalUrl}`);

    return res.status(404).json({
        message: error.message
    })
}



function errorHandler(err, req, res, next){
    console.log({
        stack: err.stack,
        err,
    });

    const statusCode = res.statusCode !== 200 ? res.statusCode: 500;

    res.status(statusCode);

    return res.status(500).json({
        message: err.message
    })


}


module.exports = {
    errorHandler,
    notFound
}