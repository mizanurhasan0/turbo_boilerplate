import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {

  @Field(() => Int)
  id: number

  @Field({ nullable: true })
  title: string

  @Field(() => Boolean)
  published: boolean
}
