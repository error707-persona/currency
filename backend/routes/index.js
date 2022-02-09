var express = require('express');
var router = express.Router();
const userModel = require("../model/user");
const {authschema} =require("../model/validation")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

router.post('/login', async function(req, res, next) {
  try {

  const user = await userModel.findOne({ email:req.body.email });
  if (user){
    if (user.password==req.body.password){
        res.status(200).send({
          message:"Login success"
        });
    } else{
      res.send({
        message: "Password Incorrect"
      });
    }
  } else{
    res.send({
      message:"User Not Found!"
    });
  }

  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }

});

router.post('/signup', async function(req, res, next) {
  try {
  const result = await authschema.validateAsync({
    email:req.body.email,
    password:req.body.password
  });
  const users = await userModel.findOne({ email:result.email });
  if ((!users) && (result.password==req.body.confirmpassword)){
    
  const user = new userModel({
    email:result.email,
    password:result.password
  });
  
  
     user.save();
    res.send({
      message: "Account Created Successfully"
    });
  }
  else{
res.send({
  message:"User Already Exists try logging in"
});
}
}catch (error) {
  if (error.isJoi==true) error.status=422
  res.send(error);
}
});


module.exports = router;
