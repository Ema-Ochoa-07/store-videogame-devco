import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum UserStatus{
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}

@Entity()
export class User extends BaseEntity{
    
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
    lastname: string


    @Column({
        enum: UserStatus,
        nullable: false,
        default: UserStatus.ACTIVE
    })
    status: UserStatus
    

    @CreateDateColumn()
    created_at: Date    

    @UpdateDateColumn()
    updated_at: Date
}