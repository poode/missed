const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { registerUserSchema } = require('../RequestSchemaList/registerUser');
const { loginSchema } = require('../RequestSchemaList/loginSchema');
const { changePasswordSchema } = require('../RequestSchemaList/changePasswordSchema');
const { updateUserProfileSchema } = require('../RequestSchemaList/updateUserProfileSchema');

const {
  self,
  register,
  login,
  changePassword,
  updateProfile,
  getProfile
} = require('../controllers/User');

// jwt is a middleware which will let request goes to its handler if there is token attached to the header called(x-auth-token)
router.post('/login', validate(loginSchema), login.bind(self));
router.post('/register', validate(registerUserSchema), register.bind(self));
router.post('/change-password', jwt(), validate(changePasswordSchema),changePassword.bind(self));
router.get('/profile', jwt(), getProfile.bind(self));
router.put('/profile', jwt(), validate(updateUserProfileSchema), updateProfile.bind(self));

exports.userRouter = router;
