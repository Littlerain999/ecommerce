const router = (require("express")).Router();
router.post("/product-add-mobile", require("../controller/product.mobile"));



module.exports = router;