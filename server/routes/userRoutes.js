const express = require('express');
const userController = require('../controllers/userController');
const app = express();

const router = express.Router();

router.post('/users', userController.createUser);
router.post('/users/login', userController.loginUser);
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUser);
app.patch('users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

module.exports = router;