import jwt from "jsonwebtoken";
import agency from "../models/agency.js";

// Authenticating Agency using Bearer token
export const requireSignIn = async (req, res, next) => {

  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    // Decoding JWT
    const decoded = jwt.verify(token, "rANdomStr1nGwiTHenouGHenc0d1ng$$");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
