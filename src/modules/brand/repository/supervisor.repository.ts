import { Injectable } from "@nestjs/common";
import { Supervisor } from "../models/supervisor.model";
import { userSupervisor } from "./fixtures/supervisor";

@Injectable()
export class SupervisorRepository {
    async findOneById(id: number): Promise<Supervisor> {
        return userSupervisor;
    }
}