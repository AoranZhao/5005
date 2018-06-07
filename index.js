let express = require('express');
let app = express();

let hostname = process.env.HNAME;

app.get('/api/a', (req, res) => {
    res.status(200).send(`${hostname} - server 4004`);
})

app.listen(5005, () => {
    console.log('listening port 4004');
})