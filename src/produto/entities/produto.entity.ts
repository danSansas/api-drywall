import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger"

@Entity({ name: "tb_produtos"})
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @Column({length: 2555})
    @ApiProperty()
    descricao: string

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    @ApiProperty()
    img: string
    
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    marca: string

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    @ApiProperty()
    dispo: string
}