import { IEvent } from "@nestjs/cqrs";

export class SupervisorRemovesBrandEvent implements IEvent {
    constructor(
        public readonly supervisorId: string,
        public readonly brandId: string
    ) { }
}