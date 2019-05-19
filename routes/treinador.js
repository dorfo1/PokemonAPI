const express = require("express");
const router = express.Router();
const Firebase = require('../helper/Firebase');

router.get("/teste", (req, res) => {
    res.send("olá")
});

router.get("/trocar/:nome/:firebaseId", (req, res) => {
    const firebaseId = req.params.firebaseId;
    console.log(firebaseId);

    const nome = req.params.nome
    console.log(nome)

    const firebase = new Firebase();
    const data = { title: nome + " quer trocar com você!", body: "Entre no trader para negociar." }
    firebase.enviarNotificacao(firebaseId, data)
    return res.status(200).send("sucesso");
});

module.exports = router;