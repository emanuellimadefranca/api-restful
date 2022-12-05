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

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id:id }, req.body, {new: true})

    res.send({
        message: 'success',
        product,
    })

   /* const product = await ProductsModel.findOne({_id: id})

    product.name = ''
    product.price = 1213

    await product.updateOne(req.body)

    res.send({
        message: 'sucess',
        product,
    }) */



}
module.exports = {
    get,
    post,
    put,
}