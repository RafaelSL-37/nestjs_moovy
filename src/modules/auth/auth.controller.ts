import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from "@nestjs/common";
import { UserCredentialsDTO } from "./models/user-credentials.dto";
import { AuthService } from "./auth.service";
import { AuthGuard } from "src/modules/auth/guard/auth.guard";
import { Public } from "./auth.constants";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post("login")
  async authUser(@Body() userCredentials: UserCredentialsDTO): Promise<string> {
    return this.authService.authenticateUserByCredentials(userCredentials);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
