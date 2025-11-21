// Importa o framework Express para servidor web
import express from 'express';

// Importa MongoClient para conexão com MongoDB
import { MongoClient } from 'mongodb';
import routes from './src/routes/postsRoutes.js';
// Importa função para conectar ao banco de dados
import conectarAoBanco from './src/config/dbConfig.js';



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
app.use(express.static("uploads"));
routes(app);

// Inicializa o servidor na porta 3000 e exibe mensagem no console
app.listen(3000, () => {
    console.log("servidor escutando");
});


