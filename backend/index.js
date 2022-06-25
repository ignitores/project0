import express from 'express';
import {config} from './config.js';
import cors from 'cors';
import cakeRoutes from './routes/cake.js'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;

const dbUrl = config.dbUrl;

var options = {
    keepAlive: true,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex:false
};

mongoose.connect(dbUrl,options,(err)=>{
    if(err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/cake', cakeRoutes);


app.listen(PORT, () => {
    console.log(`Backend Server running at: http://localhost:${PORT}`)
})