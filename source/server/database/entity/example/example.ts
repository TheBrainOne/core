import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'example'})
export class ExampleEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    surname: string
}