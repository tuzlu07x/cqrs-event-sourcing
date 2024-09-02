import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserActivity } from './entities/user-activity.entity';
import { CqrsModule } from '@nestjs/cqrs';
import Product from './entities/product.entity';
import { TrackProductClickHandler } from './handlers/track-product-click.handler';
import { TrackProductViewDurationHandler } from './handlers/track-product-view-duration.handler';
import { ProductClickedHandler } from './handlers/product-clicked.handler';
import { ProductViewDurationLoggedHandler } from './handlers/product-view-duration-logged.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Product, UserActivity]), CqrsModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    TrackProductClickHandler,
    TrackProductViewDurationHandler,
    ProductClickedHandler,
    ProductViewDurationLoggedHandler,
  ],
})
export class ProductModule {}
