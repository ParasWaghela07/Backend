//IN CODE        IN DB
//-->MODEL      -->COLLECTION
//-->SCHEMA     -->DOCUMENT  

//install mongodb
//install mongooseJs

//require and setup connection
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mongo");//default address for host and name of database name ie. mongo in my case 127==local host , 27017==port

//make schema
//ekdum leaf entity me kya kya hoga , eg--> country-->state-->city here city is leaf / document
const userSchema=mongoose.Schema({ //schema is created and saved in variBLE
  username:String,
  name : String,          //document structure
  age: Number
})

module.exports=mongoose.model("User",userSchema); //Collection creation / here user is name of collection and userSchema is structur of every document of collection and our collection is exported to use