const express = require("express");
const app = express();

const port = process.env.PORT || 5000

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

app.listen(port,()=>{console.log(`Server rodando na porta ${port}`)});