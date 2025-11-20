import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        cb(null, `${timestamp}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
}


export default routes;