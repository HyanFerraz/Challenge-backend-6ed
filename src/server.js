const express = require('express');
const routes = require('./routes/tutors');

const app = express();
const port = 3000;

app.use(express.json)
app.use(routes);

app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
});