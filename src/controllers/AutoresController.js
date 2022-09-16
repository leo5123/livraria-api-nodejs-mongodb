import autores from "../models/Autor.js"




class AutorController {
    
    static ListarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

   static CriarAutor = (req, res) => {
    let autor = new autores(req.body)

    autor.save((err) => {
        if(err){
            res.status(500).send(`${err.message} - falha ao cadastrar.`)
        }else{
            res.status(201).send(autor.toJSON())
        }
    })
   

     }

     static AtualizarAutor = (req, res) => {
        const {id} = req.params
        
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send(`${err.message} - falha ao atualizar.`)
            }else{
                res.status(200).send({message: "autor atualizado com sucesso."})
            }
        })
     }

     static AutorPorId = (req, res) =>{
        let {id} = req.params

        autores.findById(id, (err, autores) => {
           if(err){
            res.status(400).send({message: err.message})
           }else{
            res.status(200).send(autores)
           }
        })
     }
     
     static ExcluirAutor = (req, res) => {
        let {id} = req.params

        autores.findByIdAndRemove(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: "autor excluido com sucesso."})
            }
        })
     }
}

export default AutorController