const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
  
    });
    

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
        
      }
    
    });


  //LOGIN

router.post('/login', async (req, res) => {
  try{
      const user = await User.findOne(
          {
              username: req.body.username
          }
      );

      !user && res.status(401).json("Wrong User Name");

      const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
          process.env.PASS_SEC
      );


      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      console.log(originalPassword)
      const inputPassword = req.body.password;
      
      originalPassword != req.body.password && 
          res.status(401).json("Wrong Password");


      // JSON web Token, properties of user _id and isAdmin will go inside the token so when 
      // we will try to delte the user we are going to check id  inside Json web token 
      // if it will equals to _id then it means this user belongs to our client so then can use CRUD
      // If the user is admin then he can use CRUD here

      //JWT_SEC will expire in 3 days and user has to log in agin

          const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
                {expiresIn:"3d"}
            );

      const { password, ...others } = user._doc;  
      res.status(200).json({...others, accessToken});

  }catch(err){
    console.log(err)
      res.status(500).json(err);
  }

});
 
 

module.exports = router;