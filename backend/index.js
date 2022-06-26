const express = require('express');
const cors = require('cors');
const config = require('./config');
const cakeRoutes = require('./routes/cake');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;

const dbUrl = config.dbUrl;

let options = {
    keepAlive: true,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
};

mongoose.connect(dbUrl, options, () => {
    console.log('Connected to MongoDB successfully');
}, (err) => {
    if (err) console.log(err);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/cake', cakeRoutes);


app.listen(PORT, () => {
    console.log(`Backend Server running at: http://localhost:${PORT}`)
})