const mongoose = require("mongoose");

module.exports = async (app) => {
    mongoose.connect(process.env.MONGO_URI)
        .then(res => {
            console.log("Connection to Database... Success");
            app.listen(process.env.PORT, () => console.log(`Server Listeing at port:${process.env.PORT}...`));
        })
        .catch(err => {
            console.error("Connection to Database... Failed", err.message);
        })
}