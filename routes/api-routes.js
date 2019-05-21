const db = require('../models');

module.exports = function(app) {
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
    })
};