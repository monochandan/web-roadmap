import {Router} from 'express';
import {registerUser, loginUser, logoutUser} from '../controller/user.controller.js';

const router = Router();

// for api registerUser from user.controller.js
router.route('/register').post(registerUser);

// for api loginUser from user.controller.js
router.route('/login').post(loginUser);

// for logout api
router.route('/logout').post(logoutUser);

export default router;