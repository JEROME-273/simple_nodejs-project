const express = require('express');
const app = express();
const routes = require('./routes/router');
const bodyParser = require('body-parser');




// Set up the view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.listen(4000 ,'localhost', ()=>{
    console.log('server running');
})
