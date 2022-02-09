var express = require('express');
var router = express.Router();
const userModel = require("../model/user");
// const Joi = require('@hapi/joi')
// var users = [
//   {
//     email:"abc@gmail.com",
//     password:"password"
//   }
// ]
// const schema = {
//   name:Joi.string().min(6).required(),
//   email:Joi.string().min(6).required().email(),
//   password:Joi.string().min(6).required()
// }
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
    res.status(500).send(error);
  }

});

router.post('/signup', async function(req, res, next) {
  
  const users = await userModel.findOne({ email:req.body.email });
  if (!users){
  const user = new userModel(req.body);
  
  try {
     user.save();
    res.send({
      message: "Account Created Successfully"
    });
  } catch (error) {
    res.status(500).send(error);
  }
} else{
res.send({
  message:"User Already Exists try logging in"
});
}
});

module.exports = router;
