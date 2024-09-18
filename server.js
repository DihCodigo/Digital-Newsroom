const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuração das rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'views', 'home', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
