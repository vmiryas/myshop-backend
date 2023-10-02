import { Module } from '@nestjs/common';
import { CartsModule } from './handlers/carts/carts.module';
import { ConfigModule } from './services/config/config.module';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyAuthGuard } from './guards/api-key-auth.guard';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CartsModule, OrdersModule, ConfigModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyAuthGuard,
    },
  ],
})
export class AppModule {}
