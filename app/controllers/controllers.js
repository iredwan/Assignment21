import {UserRegistrationService, UserLoginService, SingleUserProfileReadService, AllUserProfileReadService, UserProfileUpdateService, DeleteSingleUserService} from '../services/UserServices.js'



export const UserRegistration= async(req, res) => {
    let result = await UserRegistrationService(req);
    return res.status(200).json(result);
}
export const UserLogin= async(req, res) => {
    let result = await UserLoginService(req);
    if(result['status']==="success"){

        // Cookies Option
        let cookieOption={expires:new Date(Date.now()+24*60*60*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)

    }else {
        return res.status(200).json(result)
    }
}
export const SingleUserProfileRead= async(req, res) => {
    let result = await SingleUserProfileReadService(req);
    return res.status(200).json(result);
}
export const AllUserProfileRead= async(req, res) => {
    let result = await AllUserProfileReadService(req);
    return res.status(200).json(result);
}
export const UserProfileUpdate= async(req, res) => {
    let result = await UserProfileUpdateService(req);
    return res.status(200).json(result);
}
export const DeleteSingleUser= async(req, res) => {
    let result = await DeleteSingleUserService(req);
    return res.status(200).json(result);
}