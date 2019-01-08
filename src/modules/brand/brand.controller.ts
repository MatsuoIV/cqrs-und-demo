import { Controller, Param, Post, Body } from "@nestjs/common";
import { RemoveBrandDto } from "./interfaces/remove-brand-dto.interface";
import { BrandService } from "./brand.service";

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) { }

    @Post(':id/remove')
    async removeBrand(@Param('id') id: string, @Body() dto: RemoveBrandDto) {
        await this.brandService.removeBrand(id, dto);
    }
}