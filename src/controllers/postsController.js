import { ReturnDocument } from "mongodb";
import {getTodosPosts, criarPost, uploadImagem, atualizarPost} from "../Models/postsModel.js";
import fs from 'fs';


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


export async function atualizarNovoPost(req, res){
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    const post = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt
    
    }
    try{
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);

   } catch(erro) {
        console.error(erro.message);
        res.status(500).json({mensagem: "Erro ao criar o post"});
   }
}