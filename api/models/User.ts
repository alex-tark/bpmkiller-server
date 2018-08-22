import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";
import { IsOptional, MinLength, IsEmail } from "./Validators";

@Entity()
export default class User {
    constructor() {
        this.emailConfirmed = false;
    }

    @PrimaryGeneratedColumn() id: number;

    @Column()
    @IsEmail()
    email: string;

    @Column() emailConfirmed: boolean;

    @Column()
    @MinLength(5)
    hashedPassword: string;

    @Column("jsonb", { nullable: true })
    meta: any;
}
