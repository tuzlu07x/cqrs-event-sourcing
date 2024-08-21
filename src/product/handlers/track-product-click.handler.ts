import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { TrackProductClickCommand } from '../commands/track-product-click.command';
import { ProductClickedEvent } from '../events/product-clicked.event';

@CommandHandler(TrackProductClickCommand)
export class TrackProductClickHandler
  implements ICommandHandler<TrackProductClickCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: TrackProductClickCommand) {
    const { productId, userId } = command;

    this.eventBus.publish(new ProductClickedEvent(productId, userId));
  }
}
