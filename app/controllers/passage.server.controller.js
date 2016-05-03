var Passage = require('mongoose').model('Passage');

// common error message function
var getErrorMessage = function(err){
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                return err.errors[errName].message;
            }
        }
    } else {
        return "Unknown server error";
    }
};

// CRUD methods
exports.create = function(req, res, next) {
    var passage = new Passage(req.body);

    passage.save(function(err){
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(passage);
        }
    });
};

exports.list = function(req, res, next) {
    Passage.find({}, function(err, passages){
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
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
        }
        if (!passage){
            return next(new Error('Failed to load article ' + id));
        }
        req.passage = passage;
        next();        
    });
}
