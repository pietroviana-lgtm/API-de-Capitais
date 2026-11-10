import express from "express";

const app = express();
const porta = 3000;

const estados: Record<string, string> = {
  SP: "São Paulo",
  RJ: "Rio de Janeiro",
  MG: "Belo Horizonte",
  DF: "Brasília",
};

app.get("/estados/:sigla", (req, res) => {
  const sigla = req.params.sigla.toUpperCase();
  const capital = estados[sigla];

  if (!capital) {
    return res.status(404).json({ erro: "Estado não encontrado" });
  }

  return res.status(200).json({ sigla, capital });
});

app.listen(porta, () => {
  console.log(`Servidor executado em http://localhost:${porta}`);
});
