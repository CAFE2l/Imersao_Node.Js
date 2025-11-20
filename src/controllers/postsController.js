import { ReturnDocument } from "mongodb";
import {getTodosPosts, criarPost, uploadImagem} from "../Models/postsModel.js";

export async function listarPosts(req, res){
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}


export async function postarNovoPost(req, res){
    const novoPost = req.body;
    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);

   } catch(erro) {
        console.error(erro.message);
        res.status(500).json({mensagem: "Erro ao criar o post"});
   }
}

export async function uploadImagem(req, res){
    const novoPost = {
          descricao: "Um gato fazendo panquecas",
          imgUrl: req.file.originalname,
          alt: ""
    };

    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);

   } catch(erro) {
        console.error(erro.message);
        res.status(500).json({mensagem: "Erro ao criar o post"});
   }
}