export class ProductClickedEvent {
  constructor(
    public readonly productId: number,
    public readonly userId: string,
  ) {}
}
