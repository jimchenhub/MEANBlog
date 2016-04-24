exports.render = function(req, res){
    // 记录上次访问时间
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    // render content
    res.render('index', {
        title: "Hello world"
    });
};

