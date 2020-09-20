const api = require('express').Router();
var admin = require('firebase-admin');

api.post('/user', function(request, response){
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

api.get('/user', function(request, response){
    const patientID = request.query.id;
    const patientRef = db.ref("Users" + "/-" + patientID)

    patientRef.once("value", function(data) {
        // do some stuff once
        response.json(data);
    });
});

api.post('/createUser', function(request, response){
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

api.post('/register', function (request, response){
    var status = {};
    status['status'] = 'error';
    const email = request.body.email;
    const password = request.body.password;
    admin.auth().createUser(request.body)
    .then(function(userRecord) {
        response.redirect('dashboard');
    })
    .catch(function(error) {
        status['error'] = error;
        response.json(status);
    });
});

api.post('/register', function (request, response){
    var status = {};
    status['status'] = 'error';
    const email = request.body.email;
    const password = request.body.password;
    admin.auth().createUser(request.body)
    .then(function(userRecord) {
        console.log(userRecord);
        response.redirect('/dashboard');
    })
    .catch(function(error) {
        status['error'] = error;
        response.json(status);
    });
});
module.exports = api;