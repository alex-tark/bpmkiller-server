import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("task")
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("text")
    public type: string;

    @Column("text")
    public description: string;

    @Column("text")
    public assigned: string;

    @Column("text")
    public status: string;

    @Column("text")
    public result: string;

    @Column("bigint")
    public time: number;
}
