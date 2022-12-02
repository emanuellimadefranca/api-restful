const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params 

    let obj = {}

    if (id) {
        obj._id = id
    }

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const register = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'sucess'
    })

}
module.exports = {
    get,
}