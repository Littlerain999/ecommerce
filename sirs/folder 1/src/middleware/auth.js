const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.headers?.authorization.split(" ")[1] || null;

  if (token) {
    let user = jwt.verify(token, "shhhhh");

    req.user = user;
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
};



const isAdmin=(req,res,next)=>{
    if(req.user.role=="admin"){
        next()
    }else{
        res.status(401).send("You ar not authorized")
    }
}

module.exports = {
  isAuthenticated,
  isAdmin
};
