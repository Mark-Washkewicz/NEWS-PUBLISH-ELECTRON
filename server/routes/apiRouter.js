/**
 * ************************************
 *
 * @module  clientRouter
 * @author Mark, Joe
 * @date 11/18
 * @description router for client menu 
 *
 * ************************************
 */
const express =require('express')
const router = express.Router();
const apiController = require('../controllers/apiController')


//router for add channel
router.post('/addChannel', apiController.addChannel)

//router for publish message
router.post('/publish', apiController.publish)


module.exports = router; 
