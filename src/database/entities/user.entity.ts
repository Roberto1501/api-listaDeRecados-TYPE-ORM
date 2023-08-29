import {Entity, PrimaryColumn, Column} from "typeorm"

@Entity("user")

export class UserEntity{
    
    @PrimaryColumn("uuid")
    id!:string;

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!:string

}