const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        succes: false,
        message: `The request with the method ${req.method} and the route ${req.url} was not found.`
    })
}

export default not_found_handler