import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().required().alphanum().message({

        "string.base": "Ingrese letras",
        "string.alphanum": "Caracteres especiales no validos como = !#%"
    }),
    position: joi.string().required().alphanum().message({
        "string.base": 'aaaaaa',
        'string.email': 'Esto no es un email'
    }),
    salary: joi.number().required().min(100).message({
        'number.min':'El role debe ser minimo 1',
        'number.max':'El role debe ser maximo 3'
    }),
    isEmployed: joi.boolean().required()
})

export default schema