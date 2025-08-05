import db from '../config/userDb.js';

// Function to insert a new user
export const InsertUser = async (name, email, hashedPassword) => {
  await db.execute(
    'INSERT INTO users (Name, Email, Password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );
};

export const CreateUser = async(username, email ,password , role ,creator) =>{
  await db.execute(
    'INSERT INTO users (Name, Email, Password , roles, creator) VALUES (?, ?, ?,?,?)',
    [username, email ,password , role ,creator]
  )
}

// Function to check if a user is already registered
export const isRegisteredUser = async (email) => {
  const [rows] = await db.execute(
    'SELECT * FROM users WHERE Email = ?',
    [email]
  );
  return rows.length > 0;
};

export const findUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE Email = ?', [email]);
  return rows[0];
};

export const findUserByCreator = async (creator)=>{
  const [rows]= await db.execute('SELECT * FROM users WHERE creator = ?',[creator]);
  return rows;
}
export const findAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users WHERE roles != "Admin"');
  return rows;
}

export const statusUpdate = async (req, res)=>{
  const {Email , isActive} = req.body.createdUser;
  console.log(Email , isActive);
  
  await db.execute(
    'UPDATE users SET isActive = ? WHERE Email = ?', [!isActive , Email]
  )
  const updatedUser =await findUserByEmail(Email);
  return res.status(200).json({ message: 'Status updated successfully', user: updatedUser }); 

}