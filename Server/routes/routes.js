const express = require('express');
let router = express.Router();
let db = require('../models');
let { userHandlers, dataHandlers } = require("../controllers");

router.route('/users')
  .get(userHandlers.verifyUser, userHandlers.all)
  .delete(userHandlers.verifyUser, userHandlers.delete);

router.route('/auth/sign_up')
  .post(userHandlers.sign_up);

router.route('/auth/sign_in')
  .post(userHandlers.sign_in);

module.exports = router;
