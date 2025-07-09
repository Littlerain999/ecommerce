const Mobile = require("../model/product.mobile.model");
const validation = require("./validations/product.validation.mobile");

module.exports = async (req, res, next) => {
    try {
        const data = req.body;

        const { error, value } = validation.validate(data);

        if(!error) {

            const mobile = await Mobile.create(value);
            res
                .status(200)
                .send({
                    message: "Item - Mobile added successfully.",
                    data: mobile
                });

        } else {
            res.status(401).send(error.message);
        }
    } catch(error) {
        res.status(400).send({ message: "ERROR in file 'product.mobile.js" })
    }
}