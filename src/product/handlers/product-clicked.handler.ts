import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ProductClickedEvent } from '../events/product-clicked.event';
import { UserActivity } from '../entities/user-activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@EventsHandler(ProductClickedEvent)
export class ProductClickedHandler
  implements IEventHandler<ProductClickedEvent>
{
  constructor(
    @InjectRepository(UserActivity)
    private readonly userActivityRepository: Repository<UserActivity>,
  ) {}

  async handle(event: ProductClickedEvent) {
    const activity = new UserActivity();
    activity.productId = event.productId;
    activity.userId = event.userId;
    activity.activityType = 'CLICK';
    activity.timestamp = new Date();
    await this.userActivityRepository.save(activity);
  }
}
