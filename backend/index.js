import express from 'express';

import cakeRoutes from './routes/cake.js'

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/cake', cakeRoutes);


app.listen(PORT, () => {
    console.log(`Backend Server running at: http://localhost:${PORT}`)
})