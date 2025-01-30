import jwt from 'jsonwebtoken';
import User from '../model/userSchema.js';

// A middleware checks if User Cookies === jwt ?

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).send("Unauthorized: No Token Provided");
        }

        // Verify incoming Token and return {_id} - our current Document ID
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        // find and return User by ID and by if single is matches in token[ ...{token}]
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});

        if(!rootUser){
            throw new Error('User not found');
        }

        // These variables are not from Client
        // But Created and Assigned to be sent to your app.get() method
        // For Further manipulation or send back to client from app.get() method
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch (error) {
        res.status(401).send('Unauthorized:No Token Provided')
        console.log("Token Error:", error);
    }
}


export default authenticate;