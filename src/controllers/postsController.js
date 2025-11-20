import getTodosPosts from "../Models/postsModel.js";

export async function listarPosts(req, res){
    const posts = await getTodosPostos();
    res.json(posts);
}