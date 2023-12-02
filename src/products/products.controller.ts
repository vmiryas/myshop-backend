import { Controller, Get } from "@nestjs/common";
import { SkipAuth } from "src/guards/skip-auth.decorator";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @SkipAuth()
  @Get()
  findAll() {
    const products = this.productsService.findAll();
    return products;
  }
}
  