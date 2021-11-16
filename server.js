//requiring express, express-handlebars, and express-session
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");

//require path to connect public folder js and css
const path = require("path");

//set up app and PORT
const app = express();
const PORT = process.env.PORT || 3001;

//require sequelize for database connection
const sequelize = require("./config/connection");

//set up session (leaving this commented out until we have login and logout functionality written)
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const sess = {
//     secret: "Honor of a warrior",
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };
// app.use(session(sess));

//set handlebars as default template engine
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//middleware for json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//connection public folder so handlebars cann access js and stylesheets
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(require("./controllers/"));

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});