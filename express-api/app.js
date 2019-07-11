const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = 5000;

// Set up the express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// get all todos
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    console.log('username'+req.body.username);

    if (username.trim() === 'xyz' && password.trim() === 'xyz') {
        res.status(200).send({
            success: 'true',
            message: 'Login Successful'
        })
    } else {
        res.status(401).send({
            success: 'false',
            message: 'Login Failed'
        })
    }


});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});