// Importações

const express = require('express'); //Frameork para criar o servidor e as rotas
const { criarBanco } = require('./database'); //A chave que vai abrir a conexão com o banco de dados

const app = express(); //Criando o servidor
app.use(express.json()); //Permite que o servidor entenda requisições em formato JSON

// Criando a rota principal ./ Rota raiz
app.get('/', (req, res) => {

    res.send(`

        <body>
            <h1> Zela cidade!</h1>
            h2> Gestão de problemas urbanos</h2>
            <p> Endpoint que leva aos incidentes cadastrados: /incidentes </p>

        </body>

        `);

});

// Porta do servidor

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Rota de listagem para buscar todos  os problemas cadastrados

app.get('/incidentes', async (req, res) => {
const db = await criarBanco(); //Criando a conexão com o banco de dados e await é para esperar a resposta do banco de dados antes de continuar a execução do código
const listaIncidentes = await db.all('SELECT * FROM incidentes'); //Selecionando todos os incidentes cadastrados no banco de dados
res.json(listaIncidentes); //Entrega esses dados de incidentes como resposta em formato JSON

})
