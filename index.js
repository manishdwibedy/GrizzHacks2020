var express = require("express");
var app = express();
var db = require('./db')
var bodyParser = require('body-parser');
var admin = require('firebase-admin');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.post('/user', function(request, response){
    first_name = request.body.first_name;
    last_name = request.body.last_name;
    age = request.body.age;
    gender = request.body.gender;

    var patientData = {
        first_name: first_name,
        last_name: last_name,
        age: age,
        gender: gender,
    };
    const patientRef = db.ref("Users").push(patientData)
    const patientID = patientRef.key;

    patientData['id'] = patientID.substring(1);
    response.json(patientData);
});

app.get('/user', function(request, response){
    const patientID = request.query.id;
    const patientRef = db.ref("Users" + "/-" + patientID)

    patientRef.once("value", function(data) {
        // do some stuff once
        response.json(data);
    });
});

app.post('/createUser', function(request, response){
    var status = {};
    status['status'] = 'error';
    admin.auth().createUser(request.body)
    .then(function(userRecord) {
        status['status'] = 'success'
        status['uid'] = userRecord.uid
        response.json(status);
    })
    .catch(function(error) {
        status['error'] = error;
        response.json(status);
    });
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});