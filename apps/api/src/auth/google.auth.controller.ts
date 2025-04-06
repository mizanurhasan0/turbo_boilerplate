import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { GoogleAuthGuard } from "./guard/google_auth_guard";
import { JwtAuthGuard } from "./guard/auth_guard/jwt_auth_guard";
import { Response } from "express";

@Controller('auth')
export class GoogleAuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(GoogleAuthGuard)
    @Get('google/login')
    googleLogin() { }

    @UseGuards(GoogleAuthGuard)
    @Get('google/callback')
    async googleCallBack(@Req() req, @Res() res: Response) {

        const userData = await this.authService.login(req.user);

        res.redirect(`http://localhost:3000/api/google/callback?userId=${userData.id}&email=${userData.email}&avatar=${userData.avatar}&accessToken=${userData.accessToken}`);
    }

    @UseGuards(JwtAuthGuard)
    @Get('verify-token')
    verify() {
        return "ok"
    }
}