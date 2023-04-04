const router = require("express").Router();

const {
  register,
  activateAccount,
  login,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
} = require("../controllers/user");

const { authUser } = require("../middleware/auth");

router.route("/register").post(register);

router.route("/activate").post(authUser, activateAccount);

router.route("/login").post(login);

router.route("/sendVerification").post(authUser, sendVerification);

router.route("/findUser").post(findUser);

router.route("/sendResetCode").post(sendResetPasswordCode);

router.route("/validateResetCode").post(validateResetCode);

router.route("/changePassword").patch(changePassword);

module.exports = router;
