const {Schema}=require('mongoose');
const {model}=require('mongoose');
const demo= new Schema({
  
    c_name:{type :String,required:true},
    email:{type :String,required:true},
    message:{type :String,required:true},
 

});

const Contact=model('Contact-details',demo);
module.exports=Contact;