const error_400 = (error, req, res, next) => {

    if (error.message == "bad request") {
        return res.status(400).json({
            succes: false,
            message: "Invalid request. Please check your input and try again",
            error: error
        })
    }
    next(error)
}
export default error_400