const express = require('express');
const { getAllCategories, createCategory, deleteCategory } = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/', getAllCategories);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
