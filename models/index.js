const Product = require('./products')
const Vendor = require('./vendors')
const PurchaseOrder = require('./purchaseOrders')
const Sale = require('./sale')


Product.belongsToMany(Vendor, {through: PurchaseOrder})


Product.belongsTo(Vendor)
PurchaseOrder.belongsTo(Product)


module.exports = {
  PurchaseOrder,
  Product,
  Vendor,
  Sale
}
