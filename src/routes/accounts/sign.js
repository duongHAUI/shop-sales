const express  = require('express');
const router = express.Router();

const signController= require("../../app/controllers/AccountsCTL/SignController");


router.get('/',signController.sign);



module.exports = router;