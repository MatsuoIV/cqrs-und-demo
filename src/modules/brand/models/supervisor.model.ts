import { AggregateRoot } from "@nestjs/cqrs";
import { SupervisorRemovesBrandEvent } from "../events/impl/supervisor-removes-brand.event";

export class Supervisor extends AggregateRoot {
    constructor(private readonly id: string) {
        super();
    }

    removeBrand(brandId: string) {
        this.apply(new SupervisorRemovesBrandEvent(this.id, brandId));
    }
}