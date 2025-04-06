import { CanActivate, ExecutionContext, Injectable, SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
            context.getHandler(),
            context.getClass(),
        ]);
        const ctx = GqlExecutionContext.create(context);
        const user = ctx.getContext().req.user;
        return requiredRoles.includes(user?.role);
    }

}