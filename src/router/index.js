const userRouter = require("./user.router");
const productRouter = require("./product.router");
const router = require("express").Router();
const routers = [{
    path: "/user",
    router: userRouter
}, {
    path: "/product",
    router: productRouter
}]

routers.map(el => {
    router.use(el.path, el.router);
})

module.exports = router;