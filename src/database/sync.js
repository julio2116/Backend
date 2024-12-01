const ProductModel = require('../models/ProductModel');

async function execute(){
    await ProductModel.sync();
}

execute()