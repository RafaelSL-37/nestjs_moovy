import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { UserEntity } from "./models/user.entity";
import { UserDTO } from "./models/user.dto";
import { UserService } from "./user.service";

//TODO: PUT A MAPPER FUNCTION ON EACH OF THE RETURNS
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<UserDTO[]> {
    return this.userService.findAllUsers();
  }

  @Get(":id")
  findById(@Param() id: string): Promise<UserDTO> {
    return this.userService.findUserById(id);
  }

  @Post()
  create(@Body() user: UserDTO): Promise<UserDTO> {
    return this.userService.createUser(user);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() userToUpdate: UserDTO
  ): Promise<UserEntity> {
    const user = await this.userService.findUserById(id);

    if (user) {
      return this.userService.updateUser(userToUpdate);
    }

    throw new NotFoundException("User not found.");
  }

  @Delete(":id")
  delete(@Param("id") id: number): void {
    return this.userService.deleteUser(id);
  }
}
