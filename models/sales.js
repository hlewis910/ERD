const Sequelize = require('sequelize')
const db = require('../db')

const Sale = db.define('Sale', {
  products: {
    type: Sequelize.ARRAY
  },
  numberSold: {
    type: Sequelize.INTEGER
  },
  totalTax: {
    type: Sequelize.INTEGER
  },
  subtotalBeforeTax: {
    type: Sequelize.INTEGER
  },
  totalTaxBeforeSale: {
    type: Sequelize.INTEGER
  }

})


module.exports = Sale
