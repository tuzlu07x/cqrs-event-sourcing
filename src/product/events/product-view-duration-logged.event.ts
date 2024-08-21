export class ProductViewDurationLoggedEvent {
  constructor(
    public readonly productId: number,
    public readonly userId: string,
    public readonly duration: number,
  ) {}
}
