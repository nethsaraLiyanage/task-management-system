const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

module.exports = function () {
    router.post('/create', controller.createCategory);
    router.get('/', controller.getAllCategories);
    router.get('/:id', controller.getProductsForCategory);

    return router;
}