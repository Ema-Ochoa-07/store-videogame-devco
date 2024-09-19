import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Videogame } from "./videogame.model";
import { Purchase } from "./purchase.model";

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

    @Column({
        type: 'int',
        default: 0
      })
      quantity: number;
    

    @CreateDateColumn()
    created_at: Date    

    @UpdateDateColumn()
    updated_at: Date


    // relations
    @OneToMany(() => Videogame, (videogame) => videogame.user)
    videogames: Videogame[];

    // @OneToMany(() => Purchase, (purchase) => purchase.user)
    // purchases: Purchase[];
}