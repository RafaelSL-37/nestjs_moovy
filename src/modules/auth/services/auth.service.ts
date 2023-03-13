import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "src/modules/user/user.service";
import { UserCredentialsDTO } from "../models/user-credentials.dto";
import * as jsonwebtoken from "jsonwebtoken";
import { AuthUserDTO } from "src/modules/user/models/user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async authenticateUserByCredentials(
    userCredentials: UserCredentialsDTO
  ): Promise<string> {
    const user = await this.validateUser(userCredentials);

    if (user) {
      return jsonwebtoken.sign(user, process.env.JWT_SECRET_WORD, {
        expiresIn: "7d",
      });
    }

    throw new NotFoundException("User not found.");
  }

  async validateUser(
    userCredentials: UserCredentialsDTO
  ): Promise<AuthUserDTO> {
    const user = await this.userService.findUserByEmail(userCredentials.login);

    if (
      user &&
      (await bcrypt.compare(userCredentials.password, user.password))
    ) {
      return user;
    }

    return null;
  }
}
