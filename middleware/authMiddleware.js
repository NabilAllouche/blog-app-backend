import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json({ message: "Unauthorized! please login first" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "token invalid" });
    }

    req.bloggerId = decoded.bloggerId;
    next();
  } catch (e) {
    res.status(500).send({ message: "server error", error: e.message });
  }
};
