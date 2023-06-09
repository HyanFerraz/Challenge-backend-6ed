const express = require('express');
const tutorRoutes = require('./routes/tutors');
const sheltersRoutes = require('./routes/shelters');
const petsRoutes = require('./routes/pets');
const adoptionsRoutes = require('./routes/adoptions');

require('./database');

const app = express();

app.use(express.json());
app.use(tutorRoutes, sheltersRoutes, petsRoutes, adoptionsRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});