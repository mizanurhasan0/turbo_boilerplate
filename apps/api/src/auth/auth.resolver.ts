import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginInput } from './dto/LoginInput';
import { UnauthorizedException } from '@nestjs/common';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => Auth)
  async signIn(@Args('loginInput') loginInput: LoginInput) {
    const usr = await this.authService.validateLocalUser(loginInput);
    if (!usr) throw new UnauthorizedException('user not found');
    return await this.authService.login(usr);
  }

}
