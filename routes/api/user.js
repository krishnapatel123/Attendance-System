const router = require('express').Router();
const { validate } = require('express-validation');
const {isAuth} = require('../../middlewares/authentication');
const USER_CONTROLLER =require('../../controllers/user');
const USER=require('../../models/user');
const { all,show,update,destroy,isExists } = require('../../validations/user');

router.get('/',USER_CONTROLLER.all);
router.get('/:id',isAuth(['admin','user']),validate(show), isExists,USER_CONTROLLER.show);
router.put('/:id', isAuth(['admin','user']), validate(update), isExists, USER_CONTROLLER.update);
router.delete('/:id',isAuth(['admin','user']), validate(destroy), isExists, USER_CONTROLLER.destroy);

module.exports = router