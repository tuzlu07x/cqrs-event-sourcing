export class TrackProductClickCommand {
  constructor(
    public readonly productId: number,
    public readonly userId: string,
  ) {}
}
