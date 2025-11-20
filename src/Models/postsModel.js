import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco MongoDB usando a string de conexão do .env
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para buscar todos os posts no MongoDB
export async function getTodosPosts(){
    // Seleciona o banco de dados
    const db = conexao.db("imersao-instabyte");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como array
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}