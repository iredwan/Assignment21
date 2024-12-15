import  {TokenDecode}  from "../utility/TokenHelper.js";

const AuthMiddleware = (req, res, next) => {
    let token = req.headers['token'] || req.cookies['token'];

    if (!token) {
        return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
    }

    try {
        const decoded = TokenDecode(token);
        req.headers.phoneNumber = decoded.phoneNumber;
        req.headers.password = decoded.password;
        next();
    } catch (error) {
        return res.status(401).json({ status: 'fail', message: 'Invalid token' });
    }
};

export default AuthMiddleware;