import { Entity, PrimaryColumn, Column } from "typeorm";

export class Cliente{
    @PrimaryColumn({ type: "varchar", length: 14 })
    CPF: string;

    @Column()
    nome: string;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

}

