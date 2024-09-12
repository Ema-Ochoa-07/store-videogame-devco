import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.model";


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

      @Column({
        type: 'int',
        nullable: false
      })
      user_id: number    

    @CreateDateColumn()
    created_at: Date    

    @UpdateDateColumn()
    updated_at: Date


    // relations
    @ManyToOne(() => User, (user) => user.videogames)
    user: User;
}