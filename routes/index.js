var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser= require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
MongoClient.connect("mongodb://localhost:27017/wheelstovet", { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('wheelstovet');
    const quotesCollection = db.collection('users')
    router.options("/userInfo", cors());
    router.post('/userInfo',cors(), (req, res) => {
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

  
  })
  
  .catch(error => console.error(error))
module.exports = router;
