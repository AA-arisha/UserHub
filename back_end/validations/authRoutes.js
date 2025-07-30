import { registerSchema } from "./Schemas.js";
import { loginSchema } from "./Schemas.js";

export const AuthRegisterRoute = (req, res, next) => {
  const { error } = registerSchema.validate(req.body); 
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

export const AuthLoginRoute = (req, res, next) => {
  const { error } = loginSchema.validate(req.body); 
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};
