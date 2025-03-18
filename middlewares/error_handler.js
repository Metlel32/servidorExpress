const error_handler = (error, req,res,next)=>{
    return res.status(500).json({
        succes: false,
        message: "error",
        error: error
    })
}

export default error_handler