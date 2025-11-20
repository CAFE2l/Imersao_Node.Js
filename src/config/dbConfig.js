import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao){
    let mongoClient;

    try{
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucess!');

        return mongoClient;
    } catch (erro) {
        console.log("Falha ma conexão com o banco! ", erro);
        process.exit();
    }
}