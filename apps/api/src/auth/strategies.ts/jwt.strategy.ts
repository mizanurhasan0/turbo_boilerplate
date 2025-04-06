import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
import { JwtPayload } from "../type/jwt_payload";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private config: ConfigService, private authService: AuthService) {
        super({
            secretOrKey: config.get<string>('JWT_SECRET')!,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false
        })
    }
    validate(payload: JwtPayload) {
        const userId = payload.sub
        return this.authService.validateJwtToken(userId);
    }

}