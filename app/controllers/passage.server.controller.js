var Passage = require('mongoose').model('Passage');

exports.create = function(req, res, next) {
    var passage = new Passage(req.body);

    passage.save(function(err){
        if (err) {
            return next(err);
        } else {
            res.json(passage);
        }
    });
};

exports.list = function(req, res, next) {
    Passage.find({}, function(err, passages){
        if (err) {
            return next(err);
        } else {
            res.json(passages);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.passage);
}

exports.passageByID = function(req, res, next, id) {
    Passage.findOne({
        _id: id
    }, function(err, passage){
        if (err) {
            return next(err);
        } else {
            req.passage = passage;
            next();
        }
    });
}
