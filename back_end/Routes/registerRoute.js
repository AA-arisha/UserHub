import express from 'express';
import { registerPerson } from '../controllers/register.js';
import { AuthLoginRoute, AuthRegisterRoute} from '../validations/authRoutes.js';
import { login } from '../controllers/login.js';
import { authenticateFromCookie } from '../validations/authToken.js';
import { Create } from '../controllers/create.js';
import { ViewUsers } from '../controllers/viewUsers.js';
import { statusUpdate } from '../queries/registerUser.js';
const router = express.Router();

router.post('/register', AuthRegisterRoute , registerPerson);
router.post('/login', AuthLoginRoute ,login);
router.post('/create', Create);
router.get('/me', authenticateFromCookie, (req, res) => {
  res.json({ user: req.user }); 
});
router.get('/viewUsers' , authenticateFromCookie ,ViewUsers);
router.post('/updateStatus', authenticateFromCookie, statusUpdate);

export default router;
