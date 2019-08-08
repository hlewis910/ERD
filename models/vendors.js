const Sequelize = require('sequelize')
const db = require('../db')

const Vendor = db.define('Vendor', {
  name: {
    type: Sequelize.STRING,
  },
  telephone: {
    type: Sequelize.INTEGER,
  },
  address: {
    type: Sequelize.INTEGER,
  }
})

module.exports = Vendor
