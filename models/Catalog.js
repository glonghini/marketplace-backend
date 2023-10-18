const mongoose = require('mongoose')

const CatalogSchema = new mongoose.Schema(
  {
    name: String,
    price: Number
  },
  {
    collection: 'catalog'
  }
)

const Catalog = mongoose.model('Catalog', CatalogSchema)
module.exports = Catalog