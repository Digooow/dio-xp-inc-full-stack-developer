import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/calculadora', (req, res) => {
    

  const operacoes = ["Soma", "Subtração", "Divisão", "Multiplicação"]

    res.send({operacoes})
});

app.post('/api/soma', (req, res) => {

  const num1 = Number = req.body.num1;
  const num2 = Number = req.body.num2;

  const soma = num1 + num2;

  res.send({soma})

})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})