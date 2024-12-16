import express from "express";
import * as controllers from '../controllers/controllers.js'
import AuthMiddleware from "../middlewares/AuthMiddleware.js"
const router = express.Router();


router.post('/UserRegistration', controllers.UserRegistration)
router.get('/UserLogin/:phoneNumber/:password', controllers.UserLogin)
router.get('/SingleUserProfileRead/:id', controllers.SingleUserProfileRead)
router.get('/AllUserProfileRead', controllers.AllUserProfileRead)
router.post('/UserProfileUpdate/:id', controllers.UserProfileUpdate)
router.post('/DeleteSingleUser', AuthMiddleware, controllers.DeleteSingleUser)



export default router;