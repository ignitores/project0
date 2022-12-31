const express = require('express');
const cors = require('cors');
const config = require('./config');
const cakeRoutes = require('./routes/cake');
const registerRoutes = require('./routes/user');
const mongoose = require('mongoose');
const stripe = require('./routes/stripe');
const dotenv = require('dotenv')

dotenv.config({ path: './.env' });

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

mongoose.set('strictQuery',true);

mongoose.connect(dbUrl, options, () => {
    console.log('Connected to MongoDB successfully');
}, (err) => {
    if (err) console.log(err);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/cake', cakeRoutes);
app.use('/user', registerRoutes);
app.use('/stripe', stripe);


app.listen(PORT, () => {
    console.log(`Backend Server running at: http://localhost:${PORT}`)
})