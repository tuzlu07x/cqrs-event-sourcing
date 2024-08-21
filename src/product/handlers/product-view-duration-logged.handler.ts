import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ProductViewDurationLoggedEvent } from '../events/product-view-duration-logged.event';
import { UserActivity } from '../entities/user-activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@EventsHandler(ProductViewDurationLoggedEvent)
export class ProductViewDurationLoggedHandler
  implements IEventHandler<ProductViewDurationLoggedEvent>
{
  constructor(
    @InjectRepository(UserActivity)
    private readonly userActivityRepository: Repository<UserActivity>,
  ) {}

  async handle(event: ProductViewDurationLoggedEvent) {
    const activity = new UserActivity();
    activity.productId = event.productId;
    activity.userId = event.userId;
    activity.activityType = 'VIEW_DURATION';
    activity.timestamp = new Date();
    activity.duration = event.duration;
    await this.userActivityRepository.save(activity);
  }
}
