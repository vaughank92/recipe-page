const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();


const api = require('./routes/api.route');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/test`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/test`)});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api);

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

// app.use((req, res, next) => {
//     let err = new Error('Problem');
//     err.status = 404;
//     next(err);
// });

console.log('here');

// module.exports = app;