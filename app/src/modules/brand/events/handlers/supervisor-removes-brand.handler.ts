import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SupervisorRemovesBrandEvent } from "../impl/supervisor-removes-brand.event";

@EventsHandler(SupervisorRemovesBrandEvent)
export class SupervisorRemovesBrandHandler implements IEventHandler<SupervisorRemovesBrandEvent> {
    handle(event: SupervisorRemovesBrandEvent) {
        console.log('SupervisorRemovesBrandEvent...');
    }
}