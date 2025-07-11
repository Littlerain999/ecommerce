const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const validation = require("./validations/user.login.validation");

module.exports = async (req, res, next) => {
    try {
        const data = req.body;
        const { error, value } = validation.validate(data);

        if(!error) {

            const { username, password } = value;
            const user = await User.findOne({ username });            

            if(user) {

                const isPasswordCorrect = await Bcrypt.compare(password, user.password);

                if(isPasswordCorrect) {

                    let objUser = user.toObject()
                    delete objUser.password;

                    const token = jwt.sign(objUser, process.env.JWT_SECRET);

                    res.status(200).send({ "message": "Login success", "token": token})

                } else {
                    res.status(403).send({ "message": "wrong password" });
                }

            } else {
                res.status(403).send({ "message": "wrong username" });
            }
        }

    } catch(error) {
        res.status(400).send("Error");
    }
}

