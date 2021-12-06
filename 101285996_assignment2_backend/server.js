const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 9090;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfully Established");    
}).catch(err => {
    console.log('Cannot Connect to database', err);
    process.exit();
});


const employeeRouter = require('./routes/employeeRouter');

app.use('/', employeeRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
