import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Videogame } from "./videogame.model";

export enum UserStatus{
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}

@Entity()
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number


    @Column('varchar', {
        length: 150,
        nullable: false,
        unique: true,
    })
    name: string


    @Column('varchar', {
        length: 150,
        nullable: false,
        unique: true,
      })
    lastname: string
    

    @Column('float', {
        nullable: false
    })
    amount: number


    @Column('enum',{
        enum: UserStatus,
        default: UserStatus.ACTIVE
    })
    status: UserStatus
    

    @CreateDateColumn()
    created_at: Date    

    @UpdateDateColumn()
    updated_at: Date


    // relations
    @OneToMany(() => Videogame, (videogame) => videogame.user)
    videogames: Videogame[];
}