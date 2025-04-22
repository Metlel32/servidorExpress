import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().required().alphanum().message({

        "string.base": "Ingrese letras",
        "string.alphanum": "Caracteres especiales no validos como = !#%"
    })
})

export default schema