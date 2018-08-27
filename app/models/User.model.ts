import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("text")
    public username: string;

    @Column("text")
    @IsEmail()
    public email: string;

    @Column("text")
    public password: string;

    @Column("integer")
    public role: number;

    @Column("text")
    public vk: string;

    @Column("text")
    public fio: string;
}
