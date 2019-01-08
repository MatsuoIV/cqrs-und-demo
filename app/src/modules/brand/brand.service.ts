import { Injectable } from "@nestjs/common";
import { CommandBus } from '@nestjs/cqrs';
import { RemoveBrandDto } from "./interfaces/remove-brand-dto.interface";
import { RemoveBrandCommand } from "./commands/impl/remove-brand.command";

@Injectable()
export class BrandService {
    constructor(private readonly commandBus: CommandBus) {}

    async removeBrand(supervisorId: string, removeBrandDto: RemoveBrandDto) {
        return await this.commandBus.execute(
            new RemoveBrandCommand(supervisorId, removeBrandDto.brandId),
        );
    }
}