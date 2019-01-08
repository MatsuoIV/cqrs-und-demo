import 'reflect-metadata';
import { Module, OnModuleInit } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { CQRSModule, CommandBus, EventBus } from '@nestjs/cqrs';
import { BrandService } from './brand.service';
import { ModuleRef } from '@nestjs/core';
import { EventHandlers } from './events/handlers';
import { CommandHandlers } from './commands/handlers';
import { SupervisorRepository } from './repository/supervisor.repository';

@Module({
    imports:[CQRSModule],
    controllers: [BrandController],
    providers: [
        BrandService,
        ...CommandHandlers,
        ...EventHandlers,
        SupervisorRepository
    ]
})
export class BrandModule implements OnModuleInit {
    constructor(
        private readonly moduleRef: ModuleRef,
        private readonly command$: CommandBus,
        private readonly event$: EventBus
    ) {}

    onModuleInit() {
        this.command$.setModuleRef(this.moduleRef);
        this.event$.setModuleRef(this.moduleRef);

        this.event$.register(EventHandlers);
        this.command$.register(CommandHandlers);
    }
}