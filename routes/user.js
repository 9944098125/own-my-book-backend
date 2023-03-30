const router = require("express").Router();

const { register, activateAccount, login } = require("../controllers/user");

router.route("/register").post(register);

router.route("/activate").post(activateAccount);

router.route("/login").post(login);

module.exports = router;
