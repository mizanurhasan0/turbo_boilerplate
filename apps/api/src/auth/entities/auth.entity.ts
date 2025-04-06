import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  accessToken: string;
}
