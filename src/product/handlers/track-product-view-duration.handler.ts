import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { ProductViewDurationLoggedEvent } from '../events/product-view-duration-logged.event';
import { TrackProductViewDurationCommand } from '../commands/ck-product-view-duration.command';

@CommandHandler(TrackProductViewDurationCommand)
export class TrackProductViewDurationHandler
  implements ICommandHandler<TrackProductViewDurationCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: TrackProductViewDurationCommand) {
    const { productId, userId, duration } = command;
    this.eventBus.publish(
      new ProductViewDurationLoggedEvent(productId, userId, duration),
    );
  }
}
