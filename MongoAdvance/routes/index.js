var express = require('express');
var router = express.Router();
const userModel=require('./users'); //INTERMIEDIATE MONGOOSE
const { search } = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
////----------------------------------FLASH MESSAGES------------------------------------------------------------------------------------------//////
// router.get('/login', function(req, res, next) {
//   //IN ANY ROUTE IF WE DO SOME ACTIVITY AND ITS RESULT WE WANT IN ANOTHER ROUTE ITS SIMPLY IMPOSSIBLE WITHOUT GLOBAL VARIABLES
//   // USE FLASH MESSAGE INSTEAD
//   req.flash("age",12); ///flash creation
//   res.send("done scene");
// });

// router.get('/check', function(req, res, next) {
//  console.log(req.flash("age")); //access 
//  res.send("check terminal")
// });

////----------------------------------FLASH MESSAGES------------------------------------------------------------------------------------------//////

//////////----------------------CASE-SENSITIVE SEARCH--------------------------------------------///////////////////////
router.get('/create',async function(req,res){
  let userData=await userModel.create({
    username:"payal",
    nickname:"lul",
    description:"Gamer",
    categories:['mujra','makeup','naach','reaction']
  })
  res.send(userData);
})

router.get('/find',async function(req,res){
  let regex=new RegExp("^Harsh$",'i'); //meaning of ^ and $ is to target specific person not all ..// it makes HArsh word to recognize easily in ccapital also then pass it to find 
  let user=await userModel.find({username:regex}) // here H of harsh is capital but in Db we have input small h , so making finding insensitive we use above line // sab username wale aajaege jisme regex ho ie "harsh"
  res.send(user);
})
//////////----------------------CASE-SENSITIVE SEARCH--------------------------------------------///////////////////////

//////---------------------------SEARCH BY ARRAY FIELD VALUES-----------------------///////////////////////////////
router.get('/findFiled',async function(req,res){
  let user=await userModel.find({categories:{$all:['gamer']}}) //jiske category ka field name ka value me gamer ho wo sab dedo 
  res.send(user);
})

////////////----------------FIND BW SPECIFIC RANGES----------------/////////////////////////////////////
router.get('/findbwRanges',async function(req,res){
  var date1=new Date('2023-11-10');
  var date20=new Date('2023-11-11');
  let user=await userModel.find({datecreated:{$gte:date1,$lte:date2}}) //ye date k bichme bane hue sab bande dedo ,  
  res.send(user);
})

//////////////////////////------------------------ANY SCHEME EXIST OR NOT , NO MATTER IT HAS CERTAIN VALUE OR NOT----------/////////////////////
router.get('/findisField',async function(req,res){
 
  let user=await userModel.find({categories:{$exists:true}}) //ye field agar he to sab bande dedo jisme he ye field   
  res.send(user);
})

////////----------specific field length k andr bande dhundhne he------------//////////////////////////////////////////////////////////
router.get('/findSpecLen',async function(req,res){
 
  let user=await userModel.find({
    $expr:{ // 1 expression to handle difficult cases
      $and:[ // to check 2 conditions
        {$gte:[{$strLenCP:'$nickname'},0]},//greater than equal /// NN ki 0 se 12 tak sab dedege
        {$lte:[{$strLenCP:'$nickname'},122]} // less than equal
      ]
    }
  }) //ye field agar he to sab bande dedo jisme he ye field   
  res.send(user);
})
module.exports = router;