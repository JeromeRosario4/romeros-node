const express = require('express');
const cors = require('cors');
const upload = require('../middlewares/upload');  // ✅ Make sure the path is correct
const router = express.Router();

const {
  registerUser,
  loginUser,
  updateUser,
  getUserProfile
} = require('../controllers/user');  // ✅ Make sure the controller file exists

// User routes
router.post('/register', registerUser);                      // POST /api/user/register
router.post('/login', loginUser);                            // POST /api/user/login
router.get('/customers/:id', getUserProfile);                // GET /api/user/customers/:id
router.post('/update-profile', upload.single('image'), updateUser); // POST /api/user/update-profile

module.exports = router;
