import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Videogame extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number


    @Column({
        type: 'varchar',
        nullable: false,
        length: 150
    })
    name: string


    @Column({
        type: 'varchar',
        nullable: false,
        length: 150
    })
    console: string

    @Column({
        type: 'int',
        nullable: false,
    })
    quantity: number
    

    @CreateDateColumn()
    created_at: Date    

    @UpdateDateColumn()
    updated_at: Date
}