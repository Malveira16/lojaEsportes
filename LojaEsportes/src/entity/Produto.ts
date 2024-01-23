import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    nome: string;
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco : number;
    @Column({default: 50})
    qtdEstoque: number;

}