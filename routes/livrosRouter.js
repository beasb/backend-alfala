import { getLivro, getLivros, postLivro, patchLivro, deletaLivro } from '../controller/livroController.js';
import {Router} from 'express'

const router = Router();

// GET - Retornar livros

router.get('/', getLivro);


router.get('/:id', getLivros)

// POST - Criar um livro

router.post('/', postLivro)

// PATCH - Atualizar um livro

router.patch('/:id', patchLivro);

// DELETE - Apagar um livro

router.delete('/:id', deletaLivro );

export default router;