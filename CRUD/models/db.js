var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/EmplDB";

mongoose.connect(url, {useNewUrlParser: true}, (err) => {
    if(!err) {console.log("MongoDB Connection Succeeded.")}
    else { console.log("Error in Database Connection:" + err) }
});

require('./employee.model');