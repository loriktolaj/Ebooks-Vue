import express from 'express';

const router = express.Router();

import { getUsers, getUser, editUser, postAddUser, deleteUser } from '../controllers/users.js';

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', postAddUser);

router.put("/:id", editUser);

router.delete("/:id", deleteUser);

export default router;