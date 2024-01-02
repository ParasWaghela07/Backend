//express is framework for nodejs
//express use : - for routing

//routing :- GET POST (mainly used), PUT PATCH DELETE (just remember, less used)

//GET => USED TO SHOW DATA IN ROUTE IN URL // EXAMPLE : Searching in google/browsers
//POST => USED TO NOT SHOW DATA IN ROUTE IN URL //EXAMPLE: Login in facebook / other webs



// https://www.google.com/profile   --> /profile is route , only profile is not route
//  /profile => shows profile
//  /comment => shows comment     putting slash before any keyword makes it route

const exp = require('express') // imported the express data , const named exp have all accessibility / feautres that express brings
const app = exp() // all the powers of exp are copied to const named app so it also can perform same tasks as exp
app.set("view engine","ejs");
app.use(exp.static('./public'));

app.use(function(req,res,next){ //jab //ALWAYS RUN BEFORE ANY ROUTE/ROUTE PE JANESE PEHLE KUCH KRNA HETO YE WAAPRO
    console.log("hello from middleware");//JO MARZI KRO
    next();//compulsory to write whe we use 'USE' function //middleware me ane k baad flow jam hojata he // next() use krke flow ko push kr skte he aage ka kaam karne or aage ke route pe bhejne //MIDDLEWARE ALWAYS CONTAINS next();
});

//MIDDLEWARE 1 --> MIDDLEWARE 2 -->.......--> MIDDLEWARE LAST --> ROUTE

//WE CAN MAKE ANY NUMBERS OF MIDDLEWARES
app.use(function(req,res,next){  //middleware 2
    console.log("hello from middleware 2");
    next();
});

app.get('/', function (req, res) { //.get is for making route using '/' for default route, '/profile' for profile route
//   res.send('Hello Hello World')  --> without ejs file
    res.render("index",{scroll:"CHal"}); // jaha jaha scroll hoga waha run hojaega
})



app.get('/profile', function (req, res) { //.get is for making route using '/' for default route, '/profile' for profile route
    // res.send('Moye Poye') //localhost:3000/profile me jaake ye dikhega
    res.render("index");
  })
  // ... (other middleware and route definitions)

app.get("/error", function (req, res, next) {
    throw Error("Something went wrong");
});

// Error handling middleware - placed after all routes
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err }); // Check if 'error.ejs' is correctly placed in 'views' folder
}

// Error handling middleware added at the end
app.use(errorHandler);
app.listen(3000);

//npm i nodemon -g (-g mtlb windows me install hoga , -g nai lagaya tha vs code me install hoga ye folder me)
// npx nodemon .\express.js --> isse baar baar ctrl + c krke baar baar re-run nai krna padega pehle NodeJS wale me cd krke ana padega


///////////////////IF WE WANT TO ADD MULTIPLE ROUTES BY ONLY CHANGING SMALLER PART AND REST PART IS SAME FOR ALL THEN WE CAN USE VARIABLE/PARAMS

//for exmaple : profile/hasrh , profile/harshit , profile/ragahv --> here only name is changing so will perform

//DYNAMIC ROUTING
// app.get('/profile/:username',function(req,res){
//     res.send(`Hello from ${req.params.username}`);
// })

//Template engine : markup language which converts provided index.ejs code to html // eg ejs,jade,pug..... ejs is very similar to html
// EJS >= HTML 
//SETUP
//1) install --> npm i ejs
// jo folder m andr files he js ki usme views naamka folder banao
//2) configure --> add a line app.set("view engine","ejs"); // before all routes
//3) js code me res.send <--> res.render or res.render("views folder k andr wali file ka name without .ejs");
// app.get('/', function (req, res) { //.get is for making route using '/' for default route, '/profile' for profile route
//     //   res.send('Hello Hello World')  --> without ejs file
//         res.render("index",{scroll:"CHal"}); // jaha jaha scroll hoga waha run hojaega
//     })





////////////////////////////////////////////////////////--STATIC FILES--///////////////////////////////////////
//SETUP

//1) views level pehi ya fir jidhar express file he udher hi public naamka folder banao --> public k andr 3 folder or banao--> images,styelsheets,javascripts

//2) express file mebi static file wali line add krna padega--->app.use(express.static('./public'));--middleware use kr rhe kyuki har route k pehle ye chalna chahiye jisse apna stylesheets/javascripts run hoke page ache se load hojae ... so ejs file mese apun css and js hata skte he and usko public wali stylesheet or js folder me daal skte he new file banake

//app.use(express.static('./public')) --> ye line se default path for this express file set hojata he public pe uske aage ka path css/js tag me batana pdta he link krne k lie



//////////////////////////////////////////////////////////////--ERROR HANDLING

//sabse pehle 1 error k lir route banana he such as

// app.get("/error",function(req,res,next){ ///////// ye route error handler ko find karega
//     throw Error("Something went wrong");
// })

//error handler last route k baad always
// function errorHandler (err, req, res, next) {    // error handle krega
//     if (res.headersSent) {
//       return next(err)
//     }
//     res.status(500)
//     res.render('error', { error: err }) -- dekho...yaha pe res.render kia he mtln external ejs page se linked he , to views me jake error wala 1 ejs file banado error show krne k lie
//   }
// app.use(errorHandler); ----> error.ejs me jaha jaha error likha hoha waha waha err print hoga means jo err throw hua he error route mese wo



