const Sequelize = require('sequelize')
const db = require('../db')

const PurchaseOrder = db.define('PurchaseOrder', {
  productsBought: {
    type: Sequelize.ARRAY,
  },
  datePurchased: {
    type: Sequelize.DATE,
  },
  purchaseCost: {
    type: Sequelize.INTEGER,
  }
})

module.exports = PurchaseOrder
