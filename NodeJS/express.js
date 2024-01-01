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
  res.send('Hello Hello World')
})

app.get('/profile', function (req, res) { //.get is for making route using '/' for default route, '/profile' for profile route
    res.send('Moye Poye') //localhost:3000/profile me jaake ye dikhega
  })

app.listen(3000);

//npm i nodemon -g (-g mtlb windows me install hoga , -g nai lagaya tha vs code me install hoga ye folder me)
// npx nodemon .\express.js --> isse baar baar ctrl + c krke baar baar re-run nai krna padega pehle NodeJS wale me cd krke ana padega