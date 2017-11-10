require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const controller = require('./main_controller.js');
const massive = require('massive');

const app = express();
app.use(bodyParser.json() );
app.use(cors() );

// massive(process.env.CONNECTIONSTRING).then(db => app.set('db', db));

app.use(session({
    secret:process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: false
}))





const port= 3030;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})