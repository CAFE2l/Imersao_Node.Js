import express from  "express";

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", async (req, res) => {
    // Busca todos os posts do banco
    const posts =  await getTodosPosts();
    // Envia a resposta com status 200 e dados em JSON
    res.status(200).json(posts);
});

}

export default  routes;

