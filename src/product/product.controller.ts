import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { TrackProductClickCommand } from './commands/track-product-click.command';
import { TrackProductViewDurationCommand } from './commands/ck-product-view-duration.command';

@Controller('product')
export class ProductController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('click')
  async trackClick(
    @Body('productId') productId: number,
    @Body('userId') userId: string,
  ) {
    await this.commandBus.execute(
      new TrackProductClickCommand(productId, userId),
    );
  }

  @Post('view-duration')
  async trackViewDuration(
    @Body('productId') productId: number,
    @Body('userId') userId: string,
    @Body('duration') duration: number,
  ) {
    await this.commandBus.execute(
      new TrackProductViewDurationCommand(productId, userId, duration),
    );
  }
}
