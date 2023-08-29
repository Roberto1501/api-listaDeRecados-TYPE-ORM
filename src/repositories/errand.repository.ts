import { ErrandEntity } from "../database/entities/errand.entity";
import { DataBase } from "../database/config/database.connection";
import { Errand } from "../models/errand";
import { User } from "../models/user";

export class ErrandRepository {
    private repository = DataBase.connection.getRepository(ErrandEntity)

    public static mapRowToModel(errand: ErrandEntity, user:User): Errand {
        return Errand.create(errand, user);
    }


    public async criarRecado(newErrand: Errand) {
        const createdErrand = this.repository.create({
            id: newErrand.id,
            title: newErrand.title,
            description: newErrand.description,
            type: newErrand.type,
            user: newErrand.user.id
        })

        const result = await this.repository.save(createdErrand)
        console.log(result);
        return result
    }



}