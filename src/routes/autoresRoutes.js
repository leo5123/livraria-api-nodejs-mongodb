import express from 'express'
import AutorController from '../controllers/AutoresController.js'

const router = express.Router()

router
    .get('/autores', AutorController.ListarAutores)
    
    .get('/autores/:id', AutorController.AutorPorId)
    .post('/autores', AutorController.CriarAutor)
    .put('/autores/:id', AutorController.AtualizarAutor)
    .delete('/autores/:id', AutorController.ExcluirAutor)



export default router