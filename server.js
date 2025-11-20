import express from 'express';

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


const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("servidor escutando");
});
function buscarPostPorID(id){
    return posts.findIndex((posts) => {
        return posts.id === Number(id);
    })
}

app .get("/posts", (req, res) => {
    const index = buscarPostPorID(req.params.id);    
    res.status(200).json(posts[index]);

});