import {Entity, PrimaryColumn, Column} from "typeorm"


@Entity("errand")

export class ErrandEntity{
    
   @PrimaryColumn("uuid")
   id!:string;
   
   @Column()
   title!: string;

   @Column()
   description!:string;

   @Column()
   type!: string

   @Column()
   user!:string
}
