import { Body, Controller, Post } from "@nestjs/common";
import { UserCredentialsDTO } from "../models/user-credentials.dto";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async authUser(@Body() userCredentials: UserCredentialsDTO): Promise<string> {
    return this.authService.authenticateUserByCredentials(userCredentials);
  }
}
