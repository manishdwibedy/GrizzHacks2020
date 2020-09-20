const views = require('express').Router();

views.get('/dashboard', function(req, res, next) {
    res.render('dashboard');
});

views.get('/404', function(req, res, next) {
    res.render('404');
});
views.get('/map-google', function(req, res, next) {
    res.render('map-google');
});
views.get('/patient-dash', function(req, res, next) {
    res.render('patient-dash');
});
views.get('/patient-details', function(req, res, next) {
    res.render('patient-details');
});
views.get('/profile', function(req, res, next) {
    res.render('profile');
});
views.get('/contact', function(req, res, next) {
    res.render('contact');
});

module.exports = views;