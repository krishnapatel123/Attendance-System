const router = require('express').Router();

router.use('/auth',require('./auth'));
router.use('/',require('./auth'));
module.exports = router;
