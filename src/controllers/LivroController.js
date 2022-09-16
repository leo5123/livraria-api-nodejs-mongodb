import livros from "../models/Livro.js"




class LivroController {
    
    static ListarLivros = (req, res) => {
        livros
        .find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros)
        })
    }

   static CriarLivro = (req, res) => {
    let livro = new livros(req.body)

    livro.save((err) => {
        if(err){
            res.status(500).send(`${err.message} - falha ao cadastrar.`)
        }else{
            res.status(201).send(livro.toJSON())
        }
    })
   

     }

     static AtualizarLivro = (req, res) => {
        const {id} = req.params
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send(`${err.message} - falha ao atualizar.`)
            }else{
                res.status(200).send({message: "Livro atualizado com sucesso."})
            }
        })
     }

     static LivroPorId = (req, res) =>{
        let {id} = req.params

        livros.findById(id, (err, livros) => {
           if(err){
            res.status(400).send({message: err.message})
           }else{
            res.status(200).send(livros)
           }
        })
     }
     
     static ExcluirLivro = (req, res) => {
        let {id} = req.params

        livros.findByIdAndRemove(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: "Livro excluido com sucesso."})
            }
        })
     }

     static LivroPorEditora = (req, res) => {
        let editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros)
        })
     }
}

export default LivroController