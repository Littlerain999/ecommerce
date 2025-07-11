const router = (require("express")).Router();

router.post("/sign-up", require("../controller/user.signUp"));
router.post("/login", require("../middleware/isAdminCheck"), require("../controller/user.login"));


module.exports = router;