const User = require("../model/user.model");
const validation = require("./validations/user.signUp.validation");

module.exports = async (req, res, next) => {
    try {
        const data = req.body;
        const { error, value } = validation.validate(data);

        if (!error) {

            console.log("Valid data");

            const Bcrypt = require("bcrypt");

            const { password, ...others } = value;

            const hashes = await Bcrypt.hash(password, 10);

            const user = await User.create({ ...others, password: hashes });
            
            res
                .status(200)
                .send({ "message": "user signed up successfully", "data": user });

        } else {
            res.status(400).send({ "message": error.message });
        }
    } catch (error) {
        console.error("ERROR in executing function: signUp: ", error.message)
        res.status(400).send({ "message": error.message });
    }
}