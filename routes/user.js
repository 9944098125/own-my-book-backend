const router = require("express").Router();

const {
  register,
  activateAccount,
  login,
  sendVerification,
  findUser,
  sendResetPasswordCode,
} = require("../controllers/user");

const { authUser } = require("../middleware/auth");

router.route("/register").post(register);

router.route("/activate").post(authUser, activateAccount);

router.route("/login").post(login);

router.route("/sendVerification").post(authUser, sendVerification);

router.route("/findUser").post(findUser);

router.route("/sendResetCode").post(sendResetPasswordCode);

router.route("/validateCode").post(validatePost);

module.exports = router;
