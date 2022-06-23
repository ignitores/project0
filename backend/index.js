import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send(`Welcome ignitores`)
})

app.listen(PORT, () => {
    console.log(`Backend Server running at: http://localhost:${PORT}`)
})