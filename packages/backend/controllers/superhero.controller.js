const { Superhero } = require('./../models');

module.exports.create = async (req, res, next) => {
  const { body } = req;
  try {
    const createdHero = await Superhero.create(body);
    if (createdHero) {
      return res.status(201).send({ data: createdHero });
    }
    res.status(400).send('Bad request');
  } catch (err) {
    next(err);
  }
};


module.exports.getMany = async (req, res, next) => {
 const {query: {page, item_on_page}} = req;
 try{
  const foundHeroes = await Superhero.findAll({
    attributes: {
      exclude: ['id', 'createdAt', 'updatedAt'],
      limit: item_on_page,
      offset: item_on_page * (page - 1),
    }
  });
  res.status(200).send({data: foundHeroes})
 } catch(err) {
   next(err);
 }
};

module.exports.getById = async (req, res, next) => {
  const {
    params: { superheroId },
  } = req;
  console.log(superheroId);
  try {
    const foundHero = await Superhero.findByPk(superheroId);
    if (foundHero) {
      return res.status(201).send(foundHero);
    }
    res.status(400).send("Bad request!");
  } catch (err) {
    next(err);
  }
};

//??
module.exports.updateById = async (req, res, next) => {
  const {
    body,
    params: { superheroId },
  } = req;
  console.log(body);
  try {
    const [updatedRow, [updatedSuperHeroes]] = await Superhero.update(body, {
      where: { id: superheroId },
      returning: true,
    });

    if (updatedRow) {
      return res.status(201).send({ data: updatedSuperHeroes });
    }
    res.status(400).send("Bad request!");
  } catch (err) {
    next(err);
  }
};


module.exports.deleteById = async (req, res, next) => {
  const {
    params: { superheroId },
  } = req;
  console.log(superheroId);
  try {
    const foundHero = await Superhero.destroy({
      where: {
        id: superheroId,
      },
    });
    if (foundHero) {
      return res.sendStatus(204);
    }
    res.status(404).send("Not found");
  } catch (err) {
    next(err);
  }
};

module.exports.addImage = async (req, res, next) => {
  const {
    file,
    params: { superheroId },
  } = req;
  try {
    const superheroUpdate = await Superhero.destroy({
      where: {params: params},
    });
    if (superheroUpdate) {
      superheroUpdate.images.push(file.filename);
      const [updatedRow, [updatedSuperheroes]] = await Superhero.update(
        superheroUpdate.get(),
        {
          where: { id: superheroId },
          returning: true,
        }
      );
      return res.status(200).send({ data: updatedSuperheroes });
    }
    res.status(404).send('Not found');
  } catch (err) {
    next(err);
  }
};