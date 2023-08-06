const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Product, ProductTag, Tag } = require('../../models');

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }, { model: ProductTag }, { model: Tag }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!oneCategory) {
      res.status(404).json({ message: 'No Category was found' });
      return;
    }
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});


// create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
    }).then(newCategory => {
      res.status(200).json(newCategory);
    })
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

 // update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update({
      where: {
      name: req.body.name,
      },
      })
      if(!updateCategory[0]) {
        res.status(404).json({ message: 'No user with that ID'});
      return;
      }
      res.status(200).json(updateCategory);
    } catch(err) {
      console.log(err);
      res.status(500).json(err);
    }
    });

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
