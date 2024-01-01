//NPM => node package manager //packages ka playstore

//npm contains boht saare packages
//package => predefined cheeze/features jisko direct use kr ske , to avoid extra processing and making that feature // direct package use kro // npm mese usko laa skte he / files of codes


//STEPS TO USE NPM


//ONE-LINER-JOKES

//STEP 1 --> INSTALL PACKAGE FROM NPM WEBSITTE / TYPE IN TERMINAL "npm i one-liner-jokes"
//STEP 2 --> USE / IMPORT  // WEBSITE PE JAAKE PADHNA PADEGA
let oneLinerJoke=require('one-liner-joke');
oneLinerJoke.getRandomJoke(); // generate random jokes // getRandomJoke is method of imported joke npm
//STEP 3 --> PRINT RESULTS 
console.log(oneLinerJoke.getRandomJoke());


//ART
//INSTALL --> npm i figlet

//USE/PRINT
var figlet = require("figlet");

figlet("PARAS WAGHELA !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


