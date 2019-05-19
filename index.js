const express = require("express");
const app = express();
const treinador = require('./routes/treinador');



app.use(express.json());

app.use("/api/treinador", treinador)

const port = process.env.PORT || 7001;
app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
})
