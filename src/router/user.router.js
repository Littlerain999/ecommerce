const router = (require("express")).Router();

router.post("/sign-up", require("../controller/user.signUp"));
router.post("/login", require("../controller/user.login"));
router.post("/product-add-mobile", require("../controller/product.mobile"));






module.exports = router;