import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthInput {

  @Field()
  email: string

  @Field()
  password: string

  @Field({ nullable: true })
  avatar?: string
}
