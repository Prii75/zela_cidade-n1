# 🚀 API ZelaCidade

## Sobre o 📌 Projeto

A API *ZelaCidade* foi criada para registrar e gerenciar problemas urbanos, como:

-Buracos
-Vazamentos
-Lixo
-Iluminação

Essa API nos permite criar registros, vizualizar e deletar ocorrências.

## 🛠️ Tecnologias Utilizadas

-Node.js
-Express
-SQLite
-SQLite3
-Postman
-Nodemon
---
## 📦 Instalação
`npm install`
---
## ▶️Como Executar
```bash
npm run dev
```
`http://localhost:3000`

[Clique Aqui](http://localhost:3000)
---
## 🗄️Banco de  Dados

O banco de dados é criado automaticamente ao iniciar o projeto.

```
database.db
```
## 🧾Tabela

|Campo           |   Descrição|
|---------        |------------|
|ID                |  Identificador Único|
|Tipo_problema|Tipo do problema|
|Localizacao|Onde ocorreu|
|Descricao|Detalhes do incidente|
|Prioridade|Baixa, Média ou alta|
|nome_solicitante|Quem registrou|
|data_registro|Data do registro|
|hora_resgitro|Hora do registro|
|status_resolucao|Status (Padrão: Pendente)|

---
## 🔗Endpoints
### Rota Inicial
```http
Get /
```
Retorna uma página simples com informação da API.
---
### Rota para listar todos os incidentes
```http
GET / incidentes
```
Retorna todos os registros do banco de dados.
---
### Rota para bscar um incidente específico (ID)
```http
GET / incidentes:id
```
Retorna uma ocorrência específica.
---
### Rota para criar um novo incidente
```http
Post/incidentes
```
### Body (JSON)

```json
 {
        "tipo_problema": "Iluminação",
        "localizacao": "Rua das Flores, 123, Bairro das Margaridas",
        "descricao": "Poste queimado há dias",
        "prioridade": "Média",
        "nome_solicitante": "Ana Clara",
        "data_registro": "16/03/2026",
        "hora_registro": "10:30"
    };
```
---
## Segurança





// <!-- ## Esses emojis é um padrão em praticamente TODO README: -->

// <!-- ## 🚀 Nome da API / Projeto -->
// <!-- ## 📌 Sobre o Projeto -->
// <!-- ## 🎯 Objetivo -->
// <!-- ## 🛠️ Tecnologias -->
// <!-- ## 📦 Instalação -->
// <!-- ## ▶️ Como Executar -->
// <!-- ## ⚙️ Configurações -->
// <!-- ## 🗄️ Banco de Dados -->
// <!-- ## 🔗 Endpoints -->
// <!-- ## 🔐 Segurança -->
// <!-- ## 📚 Conceitos -->
// <!-- ## 💡Dicas / Melhorias -->
// <!-- ## 👩‍💻 Autor -->
// ---
// <!-- ## 📖 Descrição -->
// <!-- ## 🔧 Ferramentas -->
// <!-- ## 💻 Ambiente -->
// <!-- ## 📊 Dados -->
// <!-- ## 🧾 Tabela -->
// <!-- ## 📡 Requisições -->
// <!-- ## 📥 Entrada de dados -->
// <!-- ## 📤 Saída de dados -->
// <!-- ## 🚫 Bloqueios / proteção -->
// <!-- ## 🧠 Aprendizado -->
// <!-- ## 🎓 Educacional -->
// <!-- ## ⚠️ Atenção -->
// <!-- ## ❗Importante -->
// <!-- ## 🤝 Contribuição -->
// <!-- ## 📄 Licença --> -->