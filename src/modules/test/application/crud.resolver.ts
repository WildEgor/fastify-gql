import { Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CrudResolver {

  // For demonstration purposes only
  // eslint-disable-next-line require-await
  @Query(() => Int)
  public async random(): Promise<Number> {
    return Math.floor(Math.random() * 10);
  }

}
