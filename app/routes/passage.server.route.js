var passage = require("../controllers/passage.server.controller");

module.exports = function(app) {
    app.route('/api/passage')
        .post(passage.create)
        .get(passage.list);

    app.route("/api/passage/:passageId")
        .get(passage.read);

    app.param('passageId', passage.passageByID); // middleware. will be implemented before read() function
}