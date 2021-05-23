const { Router } = require('express');
const superheroRouter = require('./routers/superheroRouter');
const router = Router();
// http://127.0.0.1:5000/api/superheroes/
router.use('/superheroes', superheroRouter);
module.exports = router;