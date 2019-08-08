const Product = require('./products')
const Vendor = require('./vendors')
const PurchaseOrder = require('./purchaseOrders')
const Sale = require('./sale')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Product.belongsToMany(Vendor, {through: PurchaseOrder})


Product.belongsTo(Vendor)
PurchaseOrder.belongsTo(Product)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: cons
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  PurchaseOrder,
  Product,
  Vendor,
  Sale
}
