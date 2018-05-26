const router = require('express').Router();

const { userCtrl } = require('../controller/userController');

router.route('/user')
  .get(userCtrl.get)
  .post(userCtrl.post);

module.exports.router = router;
