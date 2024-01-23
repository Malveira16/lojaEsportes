import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Cliente } from "../entity/Cliente"

export class ClienteController {

    private clienteRepository = AppDataSource.getRepository(Cliente)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.clienteRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const CPF = request.params.CPF


        const cliente = await this.clienteRepository.findOne({
            where: { CPF }
        })

        if (!cliente) {
            return "Cliente não cadastrado"
        }
        return cliente
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { CPF, nome, endereco, telefone, email } = request.body;

        const cliente = Object.assign(new Cliente(), {
            CPF,
            nome,
            endereco,
            telefone,
            email
        })

        return this.clienteRepository.save(cliente)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const CPF = request.params.CPF

        let clienteToRemove = await this.clienteRepository.findOneBy({ CPF })

        if (!clienteToRemove) {
            return "Esse cliente não existe"
        }

        await this.clienteRepository.remove(clienteToRemove)

        return "O cliente foi removido"
    }

}