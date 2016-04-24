var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var PassageSchema = new Schema({
    title: {
        type: String,
        trim: true
    }, 
    date: {
        type: Date,
        default: Date.now
    },
    tag: [String],
    content: String
});

mongoose.model('Passage', PassageSchema);

// curl -X POST -H "Content-Type: application/json" -d '{"title":"Test", "date": "2016-4-24", "tag":["one","two"], "content": "this is content"}' localhost:3000/passage