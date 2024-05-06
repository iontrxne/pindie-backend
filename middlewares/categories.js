const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({});
  next();
}

const createCategory = async (req, res, next) => {
  console.log("POST /categories");
  try {
    console.log(req.body);
    req.сategory = await categories.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ messege: "Ошибка создания категории" }));
  };
};

module.exports = {
  findAllCategories,
  createCategory,
}; 