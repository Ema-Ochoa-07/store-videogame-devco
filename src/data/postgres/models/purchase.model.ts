import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.model";
import { Videogame } from "./videogame.model";


@Entity()
export class Purchase extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    //  @Column('varchar', {
    //   length: 200,
    //   nullable: false
    //   })
    //   detail: string

      @Column('float', {
        nullable: false
         })
       amount: number

           @Column({
        nullable: false,
        type: 'int'
      })
      quantity: number;

      @Column('int', {
        nullable: false
        })
      userId: number

      @Column('int', {
        nullable: false
        })
      videogameId: number


    @CreateDateColumn()
    created_at: Date    

    @UpdateDateColumn()
    updated_at: Date


    // relations
    // @ManyToOne(() => User, (user) => user.purchases)
    // user: User;

    // @ManyToOne(() => Videogame, (videogame) => videogame.purchases)
    // videogame: Videogame;

}