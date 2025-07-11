module.exports = async (req, res, next) => {
    try {
        next()
    } catch (error) {
        console.log("ERROR in middleware \"isAdminCheck.js\": ", error);
        res.status(403).send("You are not the user");
        next()
    }
}