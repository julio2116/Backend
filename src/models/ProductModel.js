const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductModel = connection.define("ProductModel", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    slug:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false       
    },
    priceWithDiscount: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    enabled: {
        type: DataTypes.STRING
    }
},{
    tableName: 'products'
})

module.exports = ProductModel