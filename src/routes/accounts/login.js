const express  = require('express');
const router = express.Router();

const loginController= require("../../app/controllers/AccountsCTL/LoginController");


router.get('/',loginController.login);



module.exports = router;