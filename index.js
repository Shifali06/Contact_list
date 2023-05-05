const express=require('express');
const path=require('path');
const port=8000;
const app=express();
const db=require("./config/mongoose");
const Contact=require('./models/contact');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
var contactlist=[{
    name:"papa",
    phone:"9815004363"
},
{
    name:"mama",
    phone:"9915915089"
},{
    name:"me",
    phone:"9815436322"
}
]

app.get('/',function(req,res){
    return res.render('home',{title:"My Contact_list",contact_list:contactlist});
});
app.post('/create-contact',function(req,res){
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){console.log('error in contact_list');return;}
        console.log('******',newContact);
        return res.redirect('back');
    })
   

})
app.listen(port,function(err){
    if(err){
        console.log('error in running',err);
    }
    console.log('yup!my express is running',port);
});