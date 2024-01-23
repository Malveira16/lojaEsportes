import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Produto } from "../entity/Produto"

export class ProdutoController {

    private produtoRepository = AppDataSource.getRepository(Produto)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.produtoRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const produto = await this.produtoRepository.findOne({
            where: { id }
        })

        if (!produto) {
            return "produto não cadastrado"
        }
        return produto
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { nome, preco, qtdEstoque } = request.body;

        const user = Object.assign(new Produto(), {
            nome,
            preco,
            qtdEstoque
        })

        return this.produtoRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.produtoRepository.findOneBy({ id })

        if (!userToRemove) {
            return "Esse produto não existe"
        }

        await this.produtoRepository.remove(userToRemove)

        return "O produto foi removido"
    }

}