const Catalog = require("../models/Catalog")

const index = async (req, res) => {
  try {
    const catalog = await Catalog.find()

    res.json({ catalog })
  } catch (err) {
    console.log(err)
    res.status(400).json({ err })
  }
}

const store = async (req, res) => {
  const body = req.body
  console.log(body)

  try {
    await Catalog.insert(body)

    res.json({ message: 'ok' })
  } catch (err) {
    console.log(err)
    res.status(400).json({ err })
  }
}

module.exports = { index, store }