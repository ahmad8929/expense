const jwt = require("jsonwebtoken");
const User = require("../models/User");

// exports.protect = async (req,res,next) => {
//     let token = req.headers.authorization?.split(" ")[1];
//     if(!token) return res.status(401).json({message: "Not authorized, no token"});

//     try{
//         const decoded = jwt.verify(token,process.env.JWT_SECRET);
//         req.user = await User.findById(decoded.id).select('-password')
//         next();
//     } catch (err) {
//         res.status(401).json({ message: "Not authorized, token failed" })
//     }
// }

exports.protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        next();
    } catch (err) {
        console.error("Auth Middleware Error:", err.message);
        res.status(401).json({ message: "Not authorized, token failed" });
    }
};