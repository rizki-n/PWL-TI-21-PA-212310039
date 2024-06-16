//const { Sequelize, sequelize, Users, messegers } = require("./models");

require("dotenv").config();
const express = require('express');

const app = express();
const port = process.env.API_PORT; //|| 3000;
const db_mysql = require("./models");
db_mysql.sequelize.sync();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const userRoute = require("./src/routes/UserRoute");
const messegerRoutes = require("./src/routes/MessegerRoutes");

app.use("/api/user/", userRoute);
app.use("/api/msg/", messegerRoutes);



app.get('/', (req, res) => {
    res.send('Halo, dunia!');
});

app.listen(port, () => {
    console.log(`Server app listening on http://localhost:${port}`);
});

module.exports = app;