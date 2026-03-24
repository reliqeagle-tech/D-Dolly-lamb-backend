
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    let token;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "Provide token",
        error: true,
        success: false
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    req.userId = decoded.id;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access",
      error: true,
      success: false
    });
  }
};

export default auth;