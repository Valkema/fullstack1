const { Router } = require('express');
const { superheroController } = require('./../controllers');
const superheroRouter = Router();
const { upload } = require('./../middleware');
superheroRouter
  .route('/')
  .post(superheroController.create)
  .get(superheroController.getMany);
superheroRouter
  .route('/:superheroId')
  .get(superheroController.getById)
  .put(superheroController.updateById, superheroController.create)
  .delete(superheroController.deleteById);
// /api/superheroes/1/images
superheroRouter.patch(
  '/:superheroId/images',
  upload.single('sup_image'),
  superheroController.addImage
);
module.exports = superheroRouter;