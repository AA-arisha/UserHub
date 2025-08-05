import { findUserByCreator } from "../queries/registerUser.js";
import { findAllUsers } from "../queries/registerUser.js";

export const ViewUsers =async (req, res)=>{
    const user = req.user;
    let users = [];
    if (user.roles === "Manager") {
        users =await findUserByCreator(user.Email)
    }else if (user.roles === "Admin") {
        users = await findAllUsers();
    }
    res.json({ users: users })
}