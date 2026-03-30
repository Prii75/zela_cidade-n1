// Importações

const express = require('express'); //Frameork para criar o servidor e as rotas
const { criarBanco } = require('./database'); //A chave que vai abrir a conexão com o banco de dados

const cors = require('cors')



const app = express(); //Criando o servidor
app.use(express.json()); //Permite que o servidor entenda requisições em formato JSON

app.use(cors())
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


// Rota de listagem para buscar todos  os problemas cadastrados

app.get('/incidentes', async (req, res) => {
    const db = await criarBanco(); //Criando a conexão com o banco de dados e await é para esperar a resposta do banco de dados antes de continuar a execução do código
    const listaIncidentes = await db.all('SELECT * FROM incidentes'); //Selecionando todos os incidentes cadastrados no banco de dados
    res.json(listaIncidentes); //Entrega esses dados de incidentes como resposta em formato JSON

})

app.get('/incidentes/:id', async (req, res) => {
    const { id } = req.params
    const db = await criarBanco()
    const incidentEspecifico = await db.get('SELECT * FROM incidentes WHERE id = ?', [id])

    res.json(incidentEspecifico)

    

})

app.post('/incidentes', async (req, res) => {

        const {tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema
} = req.body

    const db = await criarBanco()

    await db.run(`
        INSERT INTO incidentes (tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema)
        VALUES (?, ?, ?, ?, ?, ?, ?,?,?)`, [tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema])

    res.send(`Incidente novo registrado: ${tipo_problema} registrado na data ${data_registro} por ${nome_solicitante} `)
})

// Rota  de atualizaçãO

app.put('/incidentes/:id', async (req, res) => {

    const { id } = req.params;
const  {descricao, prioridade, status_resolucao} = req.body;
    const db = await criarBanco();

    await db.run(`
        UPDATE incidentes
        SET descricao = ?,
        prioridade = ?,
        status_resolucao = ?
        WHERE id = ?`, [descricao, prioridade, status_resolucao, id])

        res.send(`Incidente ${id} foi atualizado com sucesso!`)
});

// Rota de remoção

app.delete('/incidentes/:id', async (req, res) => {

    const { id } = req.params;

    const db = await criarBanco();

    await db.run(`
        DELETE FROM incidentes
        WHERE id = ?`,
        [id])

        res.send(`Incidente ${id} foi removido com sucesso!`)   
})

// Porta do servidor

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
// comentário
