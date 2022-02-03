import express from 'express';



const router = express.Router();

import { getUsers, getUser, editUser, postAddUser, deleteUser, login, register} from '../controllers/users.js';

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', postAddUser);

router.put("/:id", editUser);

router.delete("/:id", deleteUser);

router.post('/login', login);

router.post('/register', register);


// // Return User's data
// router.get('/profile', passport.authenticate('jwt', {
//     session: false
// }), (req, res) => {
//     return res.json({
//         user: req.user
//     });
// });
export default router;