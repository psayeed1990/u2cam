const factory = require('./handlers/factory');
const Category = require('./../models/categoryModel');

exports.createCategory = factory.createOne(Category);
exports.editCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
exports.getCategory = factory.getOne(Category);
exports.getAllCategories = factory.getAll(Category);