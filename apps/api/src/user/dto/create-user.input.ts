import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  email: string;

  @Field()
  password: string

  @Field({ nullable: true })
  avatar?: string

  @Field({ nullable: true })
  role?: string
}
