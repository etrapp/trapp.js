const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("root /");
});
app.get("/home", (req, res) => {
    res.send("/home");
});
app.get("/test", (req, res) => {
    res.send("/test");
});

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;

    res.send(`<h1>/${nome}/${lang}</h1>`);
});

app.listen(3000,()=>{console.log("App rodando!");});