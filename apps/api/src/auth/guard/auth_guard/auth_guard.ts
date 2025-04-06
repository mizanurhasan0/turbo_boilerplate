import { applyDecorators, UseGuards } from "@nestjs/common";
import { Roles, RolesGuard } from "./role.guard";
import { JwtAuthGuard } from "./jwt_auth_guard";


export function useAuth(...roles: string[]) {
    return applyDecorators(
        Roles(...roles),
        UseGuards(JwtAuthGuard, RolesGuard),
    )
}