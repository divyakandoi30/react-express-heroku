const express =require('express');
const app =express();
const cors = require('cors');
const bodyParser= require('body-parser');
// var nodemailer = require('nodemailer');
var path = require('path');
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());
app.use(bodyParser.raw());
const MongoClient = require('mongodb').MongoClient
app.use(express.static(path.join(__dirname, 'build')));


 app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); 
//create a server that browsers can listen to.
app.get('/', (req, res) => {
  res.send(req.body);
 });
 app.get('/trial',(req,res)=>{
  res.send('success');
 });

/* MongoClient.connect("mongodb://localhost:27017/wheelstovet", { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('wheelstovet');
    const quotesCollection = db.collection('users')
    app.options("/userInfo", cors());
    app.post('/userInfo',cors(), (req, res) => {
      console.log(req.body);
      quotesCollection.insertOne(req.body)
        .then(result => {
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'divyakandoi30',
              pass: 'maa@maa1'
            }
          });
          
          var mailOptions = {
            from: 'divyakandoi30@gmail.com',
            to: 'ritikkandoi88@gmail.com',
            subject: 'Enquiry for veterinary services by '+req.body.name,
            text: 'Hello Ritik,</br> You have received one enquiry for verterinary services.Please find the information given below for further process.',
            html: '<div>Hello Ritik,</div>'+
            '<p> You have received one enquiry for verterinary services.Please find the information given below for further process.</p>'+
            '<div><label>Name : '+ req.body.name+ '</label></div>'+
            '<div><label>Address : '+ req.body.address+ '</label></div>'+
            '<div><label>Contact Number : '+ req.body.contact+ '</label></div>'+
            '<div><label>Email : '+ req.body.email+ '</label></div>'+
            '<div><label>Breed : '+ req.body.breed+ '</label></div>'+
            '<div><label>Date : '+ req.body.date+ '</label></div>'+
            '<div><label>Time : '+ req.body.time+ '</label></div>'+
            '<div><label>Comment : '+ req.body.comment+ '</label></div>'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        res.send(true);
        })
        
        .catch(error => console.error(error))
    })

  
  }) */
  
 // .catch(error => console.error(error))

// In Express, we handle a GET request with the get method:
//app.get(endpoint, callback)
//endpoint is the requested endpoint. It’s the value that comes after your domain name.
//callback tells the server what to do when the requested endpoint matches the endpoint stated. It takes two arguments: A request object and a response object.
/* app.get('/',(req,res)=>{
    res.send('Hello World');
}) */

//we serve up an index.html page back to the browser. To do this, we use the sendFile method that’s provided by the res object
app.get('/',function(req,res){
  res.send(true)
   // res.sendFile( __dirname,'/index.html')
})


/* app.post('/quotes',cors(), (req, res) => {
    console.log('Hellooooooooooooooooo!');
    res. header("Access-Control-Allow-Headers");
    res.send("Post call suceeded");
    console.log(req.body);
  }) */