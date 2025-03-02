const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.json({data:"Home"});
});


app.get('/api/test', (req, res) => {
    res.json({data:"Hello, World!"});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api/test`);
});
