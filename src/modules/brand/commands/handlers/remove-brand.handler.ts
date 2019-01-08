import { CommandHandler, ICommandHandler, EventPublisher } from "@nestjs/cqrs";
import { RemoveBrandCommand } from "../impl/remove-brand.command";
import { SupervisorRepository } from "../../repository/supervisor.repository";

@CommandHandler(RemoveBrandCommand)
export class RemoveBrandHandler implements ICommandHandler<RemoveBrandCommand> {
    constructor(
        private readonly repository: SupervisorRepository,
        private readonly publisher: EventPublisher
    ) {}

    async execute(command: RemoveBrandCommand, resolve: (value?) => void) {
        console.log('Executing RemoveBrandCommand...');

        const { supervisorId, brandId } = command;
        const supervisor = this.publisher.mergeObjectContext(
            await this.repository.findOneById(+supervisorId),
        );
        supervisor.removeBrand(brandId);
        supervisor.commit();
        resolve();
    }
}