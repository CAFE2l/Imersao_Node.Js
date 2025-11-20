import getTodosPosts from "../Models/postsModel.js";

export async function listarPosts(req, res){
    const posts = await getTodosPostos();
    res.status(200).json(posts);
}