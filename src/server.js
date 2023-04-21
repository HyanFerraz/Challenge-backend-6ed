const express = require('express');
const routes = require('./routes/tutors');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});