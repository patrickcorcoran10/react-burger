const db = require('../models');

module.exports = function(app) {
    // Post Request for the Burgerboard Component
    app.post('/create', function(req, res) {
        console.log(req.body);
        db.Burgers.create({
            name: req.body.name,
            eaten: req.body.eaten
        })
        .then(function(sentData) {
            console.log(sentData)
            res.json(sentData)
        })
    });
    // Get Request for Uneaten Burgers for Burgerboard Page
    app.get('/get-burgers', function(req, res) {
        db.Burgers.findAll({
            where: {
                eaten: false
            }
        }).then(function(gottenData) {
            res.json(gottenData)
        })
    });
    // Get Request for Eaten Burgers for the Burgerboard Page
    app.get('/get-eaten-burgers', function(req, res) {
        db.Burgers.findAll({
            where: {
                eaten: true
            }
        }).then(function(eatenBurgers) {
            res.json(eatenBurgers)
        })
    });
    // Update Route for Eating Burgers
    app.put('/eat/:id', function(req, res) {
        db.Burgers.update({
            eaten: true,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(eatingData) {
            res.json(eatingData)
        })
    });
    // Delete Request for Burgerboard 
    app.delete('/remove/:id', function(req, res) {
        db.Burgers.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(deleteData) {
            res.json(deleteDate)
        })
    });
};