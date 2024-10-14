const express = require("express");
const path = require("path");
const { create } = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const indexRouter = require("./routes/index");

const hbs = create({ extname: ".hbs" });
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.set("views", "./views");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
