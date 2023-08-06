const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
 // find all tags
  // be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tag = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }] [{ model: ProductTag }],
    });
    if (!oneTag) {
      res.status(404).json({ message: 'No Tag was found' });
      return;
    }
    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

 // create a new tag
router.post('/', async (req, res) => {
  await Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
   const tagUpdate = await Tag.update(req.body, {
    where: {
      id: req.params.id,
   },
  });
  if (!tagUpdate[0]) {
    res.status(404).json({ message: 'No tag with this id!' });
    return;
  }
  res.status(200).json(tagUpdate);
} catch (err) {
  res.status(500).json(err);
}
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
