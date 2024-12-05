const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/:day', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath, {}, (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/js/:day', (req, res) => {
    const day = req.params.day;
    const filePath = path.join(__dirname, 'days', `${day}.js`);
    res.sendFile(filePath, {}, (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});