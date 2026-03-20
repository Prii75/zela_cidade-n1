const squilte3 = require('sqlite3')
const { open } = require('sqlite')

const criarBanco = async () => {

    const db = await open({
        filename: './database.db',
        driver: squilte3.Database
    })

    await db.exec(` 
CREATE TABLE IF NOT EXISTS incidentes ( 

     id INTEGER PRIMARY KEY AUTOINCREMENT, 
     tipo_problema TEXT,
     localizacao TEXT,          
     descricao TEXT,            
     prioridade TEXT,           
     nome_solicitante TEXT, 
     contato_solicitante TEXT,    
     data_registro TEXT,        
     hora_registro TEXT,      
     status_resolucao TEXT DEFAULT 'Pendente',  
     imagem_problema TEXT    
     ) 
     `)


    console.log('Banco de dados configurado: A tabela de registros urbanos está pronta!')
    
    // Insert -C do CRUD -CREATE......

const checagem = await db.get(`SELECT COUNT(*) AS total FROM incidentes`)

if (checagem.total === 0) {

     await db.exec(`
        INSERT INTO incidentes (tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema)
        VALUES ('Problema de trânsito', 'Rua Carminha, 123', 'Trânsito congestionado', 'Baixa', 'Pedro de souza', '40028921', '16-03-2026', '10:00', 'https://st3.depositphotos.com/10591170/35602/i/450/depositphotos_356025400-stock-photo-street-lighting-city-street-several.jpg'),
        ('Iluminação', 'Rua das Flores', 'Poste queimado há dias', 'Média', 'Ana Clara', '12345678', '16-03-2026', '10:21', 'https://itaitinga.ce.gov.br/fotos/165/Img0_600x400.jpg'),
        ('Pavimentação', 'Avenida Central', 'Buracos na pista', 'Alta', 'Carlos Silva', '98765432', '16-03-2026', '11:00', 'https://www.cidadeverde.com/imgs/2021/09/14/1631625838.jpg'),
        ('Limpeza Urbana', 'Praça da Matriz', 'Acúmulo de lixo', 'Média', 'Maria Oliveira', '55555555', '16-03-2026', '11:30', 'https://www.cidadeverde.com/imgs/2021/09/14/1631625838.jpg'),
        ('Áreas Verdes', 'Parque Central', 'Árvores caídas', 'Baixa', 'João Pereira', '77777777', '16-03-2026', '12:00', 'https://www.cidadeverde.com/imgs/2021/09/14/1631625838.jpg') 
        
        `);

}
else{

console.log('Banco pronto com ${checagem.total} de incidentes')
}


const todosIncidentes = await db.all(`SELECT * FROM incidentes`)

console.log('Incidentes registrados:', todosIncidentes);

// .....Exemplo de select especifico....
   
const chamadosAna = await db.all(`SELECT * FROM incidentes WHERE nome_solicitante = 'Ana Clara'`)

console.table(chamadosAna)


// update - U do CRUD - UPDATE....

await db.run(`
    UPDATE incidentes
    SET status_resolucao = 'Em Análise'
    WHERE data_registro = '16-03-2026'
`)

console.log('Todas as reclamações registradas em 16-03-2026 tiveram uma atualização')


// ....UPDATE....

await db.run(`
    UPDATE incidentes
    SET status_resolucao = 'Resolvido'
    WHERE tipo_problema = 'Iluminação'
`)

console.log('O incidente com tipo "Iluminação" foi atualizado para "Resolvido"')


// ....DELETE....

await db.run(`
    DELETE FROM incidentes
    WHERE id = 2
`)

console.log('O incidente com id 2 foi deletado')


// ...Relatório final....

console.log('Relatório final de incidentes:');
const relatorioFinal = await db.all(`SELECT * FROM incidentes`);
console.table(relatorioFinal);

return db;

};

// criarBanco()

// module.exports cria uma ponte que permite compartilhar funções entre arquivos.
module.exports = {criarBanco};
