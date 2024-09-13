import { Module } from '@nestjs/common';

import { ItemsModule } from './items/items.module';
import { PrismaService } from './prisma.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [ItemsModule],
  controllers: [ItemsController],
  providers: [ItemsService, PrismaService],
})
export class AppModule {}
