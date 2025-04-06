import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { VerifiedCallback } from "passport-jwt";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleStragey extends PassportStrategy(Strategy) {
    constructor(private readonly config: ConfigService, private authService: AuthService) {

        super({
            clientID: config.get<string>('GOOGLE_CLIENT_ID')!,
            clientSecret: config.get<string>('GOOGLE_CLIENT_SECRET')!,
            callbackURL: config.get<string>('GOOGLE_CALLBACK_URL'),
            scope: ['email', 'profile']
        })
    }
    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifiedCallback) {
        const user = await this.authService.validateGoogleUser({
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            password: ''
        });
        done(null, user);
    }

}