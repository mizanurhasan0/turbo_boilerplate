import { Resolver, Query } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/auth_guard/jwt_auth_guard';
import { Roles, RolesGuard } from 'src/auth/guard/auth_guard/role.guard';
import { useAuth } from 'src/auth/guard/auth_guard/auth_guard';

@Resolver(() => Post)
export class PostResolver {

  constructor(private readonly postService: PostService) { }

  @useAuth('admin')
  @Query(() => [Post], { name: 'post' })
  findAll() {
    return this.postService.findAll();
  }

}
