import { ErrandEntity } from "../database/entities/errand.entity";
import { DataBase } from "../database/config/database.connection";
import { Errand, StatusErrand } from "../models/errand";
import { User } from "../models/user";
import { UserRepository } from "./user.repository";

interface ErrandType {
    userId: string;
    type?: StatusErrand;
}

export class ErrandRepository {
    private repository = DataBase.connection.getRepository(ErrandEntity)




    public async criarRecado(newErrand: Errand) {
        const createdErrand = this.repository.create({
            id: newErrand.id,
            title: newErrand.title,
            description: newErrand.description,
            type: newErrand.type,
            idUser: newErrand.user.id
        })

        const result = await this.repository.save(createdErrand)
        console.log(result);
        return result
    }

    public async listErrands(params: ErrandType){
        const result = await this.repository.find({
            where: {
                idUser: params.userId,
                type: params.type
            },
            relations: {
                user: true
            }

        });
        return result.map((item) => ErrandRepository.mapRowToModel(item));
    }


    public static mapRowToModel(errand: ErrandEntity): Errand {
        const user = UserRepository.mapRowToModel(errand.user)
        return Errand.create(errand, user);
    }

}