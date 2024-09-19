import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.model";
import { Purchase } from "./purchase.model";


@Entity()
export class Videogame extends BaseEntity{
    
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
        nullable: false
      })
    console: string

    @Column({
        nullable: false,
        type: 'int'
      })
      quantity: number;

    
    @Column('float', {
      default: 0
       })
     amount: number

      
    @Column('float', {
      nullable: false
      })
    cost: number



    @CreateDateColumn()
    created_at: Date    

    @UpdateDateColumn()
    updated_at: Date


    // relations
    @ManyToOne(() => User, (user) => user.videogames)
    user: User;

    // @OneToMany(() => Purchase, (purchase) => purchase.videogame)
    // purchases: Purchase[];
}