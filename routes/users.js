import express from 'express';
const router = express.Router();

//re
import {
    listUsers,
    insertUser,
    deleteUser,
    userData,
    editUser

} from '../controllers/userController.js';

router.get('/list', listUsers);
router.get('/isert',insertUser)
router.get('/delete',deleteUser)
router.get('/data',userData)
router.get('/edit',editUser)

export default router;
