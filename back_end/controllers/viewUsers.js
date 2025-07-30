import { findUserByCreator } from "../queries/registerUser.js";

export const ViewUsers =async (req, res)=>{
    const Admin = req.user;
    const users =await findUserByCreator(Admin.Email)
    
    res.json({ users: users })
}