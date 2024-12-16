import mongoose from "mongoose";
import UserModel from "../model/UserModel.js"
import {TokenEncode} from "../utility/tokenUtility.js"
const { ObjectId } = mongoose.Types;


export const UserRegistrationService = async(req)=>{
    try {
        let reqBody = req.body;
        let data = await UserModel.create(reqBody)
        return {status:"success", message:"User Registration successful", data: data};
    } catch (error) {
        return {status:"error", message: error.toString()};
    }
}
export const UserLoginService = async(req)=>{
    try {
        let phoneNumber=req.params.phoneNumber;
        let password=req.params.password;

        // User Count
        let total=await UserModel.find({phoneNumber:phoneNumber,password:password}).countDocuments();


        if(total===1){

            // User ID Read
            let user_id=await UserModel.find({phoneNumber:phoneNumber,password:password}).select('_id');

            // User Token Create
            let token=TokenEncode(phoneNumber,user_id[0]['_id'].toString())

            return {status:"success", token:token,total:total}
        }
    } catch (error) {
        return {status:"error", message: error.toString()};
    }
}
export const SingleUserProfileReadService = async(req)=>{
    try {
        let id = new ObjectId(req.params.id);
        let data = await UserModel.find({ _id: id });
        return {status:"success", data:data}
    } catch (error) {
        return {status:"error", message: error.toString()};
    }
}
export const AllUserProfileReadService = async(req)=>{
    try {
        let data = await UserModel.find()
        return {status:"success", message:"All Blog Read successfully", data: data};
    } catch (error) {
        return {status:"error", message: error.toString()};
    }
}
export const UserProfileUpdateService = async(req)=>{
    try {
        let user_id = new ObjectId(req.params.id);
        let reqBody = req.body;
        await UserModel.updateOne({_id: user_id}, {$set: reqBody});
        return {status: "success", massage: "User Profile Update Successful"}
    } catch (error) {
        return {status:"error", message: error.toString()};
    }
}
export const DeleteSingleUserService = async(req)=>{
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;
        await UserModel.deleteOne(reqBody)
        return {status: "success", massage: "User Delete Success"}
    } catch (error) {
        return {status:"error", message: error.toString()};
    }
}



        