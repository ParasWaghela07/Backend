var express = require('express');
var router = express.Router();
const userModel=require('./users'); // for mongoDB

//create 
// req.session.any=anyVal;

//read
//req.session.any

//delete
//req.session.destroy

/* GET home page. */
router.get('/', function(req, res) {
  // req.session.age=12; // for particular user who visits this route the value of age sets 12 for this user in server //not for all
  // req.session.ban=true; //also possible

  res.cookie("age",12); // cookie creation
  res.render('index', { title: 'Express' });
});
router.get('/readCookie',function(req,res){ 
  console.log(req.cookies.age); // read cookie
  res.send("check console");
})

router.get('/delCookie',function(req,res){ 
  res.clearCookie("age");
  res.send("clear hogai cookie");
})



router.get('/checkban',function(req,res){
  if(req.session.ban==true){
    res.send("You are banned ! ");
  }
  else{
    res.send("Not Banned");
  }
})

router.get('/removeBan',function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("bann removed");
  })
})





router.get('/create',async function(req,res){ // CREATE
  const createUser=await userModel.create({  //this async fn so it will go on halt and ban gaya pehle print ho jaega islie isko pehle chalana padega , islie await lagao and uske parent fn ko compulsory async banao , saved in variable
    username : "paras07",
    name:"Paras",
    age:19
  }); 
  res.send(createUser);
}) 

router.get('/oneusers',async function(req,res){ // READ / FIND
  let OneUsers=await userModel.findOne({name:"Abhi"}); // esa 1 banda dhundho jiska name Paras ho from database , sirf find se sab ajaege
  res.send(AllUsers);
})

router.get('/delete',async function(req,res){  // DELETE ONE
  let deletedUser=await userModel.findOneAndDelete({
    username:"paras07"
  });
  res.send(deletedUser);
})

router.get('/deleteAll',async function(req,res){ // DELETE ALL
  let deletedUser=await userModel.deleteMany({});
  res.send(deletedUser);
})

router.get('/allusers',async function(req,res){ // READ / FIND ALL
  let AllUsers=await userModel.find(); //
  res.send(AllUsers);
})


//session and cookies

//session--> npm i express-session

//creating session
//in app.js file --> var sesssion=require('express-session');-->app.use(session({
 //                                                            resave:false,
  //                                                           saveUninitialized:false,
  //                                                              secret:"random words"
//                                                              }));

module.exports = router;
