import express from 'express'
import LivroController from '../controllers/LivroController.js'

const router = express.Router()

router
    .get('/livros', LivroController.ListarLivros)
    .get('/livros/busca', LivroController.LivroPorEditora)
    .get('/livros/:id', LivroController.LivroPorId)
    .post('/livros', LivroController.CriarLivro)
    .put('/livros/:id', LivroController.AtualizarLivro)
    .delete('/livros/:id', LivroController.ExcluirLivro)



export default router