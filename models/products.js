const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('Product', {
  barcode: {
    type: Sequelize.INTEGER,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  salesTax: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  inventoryCount: {
    type: Sequelize.INTEGER
  }
})

module.exports = Product
