// Importa o framework Express para servidor web
import express from 'express';

// Importa MongoClient para conexão com MongoDB
import { MongoClient } from 'mongodb';

// Importa função para conectar ao banco de dados
import conectarAoBanco from './src/config/dbConfig.js';

// Conecta ao banco MongoDB usando a string de conexão do .env
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Array local de posts com id, descrição e URL da imagem
const posts = [
    {
        id: 1,
        descricao: "Uma foto test",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gatinho olhando para a janela",
        imagem: "https://placekitten.com/300/151",
    },
    {
        id: 3,
        descricao: "Foto artística em preto e branco",
        imagem: "https://placekitten.com/301/150",
    },
    {
        id: 4,
        descricao: "Gato curioso no sofá",
        imagem: "https://placekitten.com/302/150",
    },
    {
        id: 5,
        descricao: "Close em patinha de gato",
        imagem: "https://placekitten.com/300/152",
    },
    {
        id: 6,
        descricao: "Gato brincando com novelo",
        imagem: "https://placekitten.com/303/150",
    }
];

// Cria uma aplicação Express
const app = express();

// Configura o Express para interpretar JSON no corpo das requisições


// Inicializa o servidor na porta 3000 e exibe mensagem no console
app.listen(3000, () => {
    console.log("servidor escutando");
});

// Função assíncrona para buscar todos os posts no MongoDB
async function getTodosPosts(){
    // Seleciona o banco de dados
    const db = conexao.db("imersao-instabyte");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como array
    return colecao.find().toArray();
}


