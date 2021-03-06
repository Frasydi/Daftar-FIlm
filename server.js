const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
var history = require('connect-history-api-fallback');
app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));

app.get("/add", (req,res) => {
    res.redirect("/")
})
app.get("/edit/:id", (req,res) => {
    res.redirect("/")
})
app.get("/about", (req,res) => {
    res.redirect("/")
})

const port = process.env.PORT || 80;
app.listen(port);