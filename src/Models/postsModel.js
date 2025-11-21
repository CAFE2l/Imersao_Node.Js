import { ObjectId } from "mongodb";
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

export async function uploadImagem(req, res){
    const novoPost = {
          descricao: "Um gato fazendo panquecas",
          imgUrl: req.file.originalname,
          alt: ""
    }

    try{
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);

   } catch(erro) {
        console.error(erro.message);
        res.status(500).json({mensagem: "Erro ao criar o post"});
   }
}


export async function atualizarPost(id, novoPost){
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost});
}