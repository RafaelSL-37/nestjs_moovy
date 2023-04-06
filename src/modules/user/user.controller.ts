import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { UserEntity } from "./models/user.entity";
import { UserDTO } from "./models/user.dto";
import { UserService } from "./user.service";
import { UserMapper } from "./mapper/user.mapper";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<UserDTO[]> {
    const users = await this.userService.findAllUsers();

    return users.map(UserMapper.fromEntityToDTO);
  }

  @Get(":id")
  async findById(@Param() id: string): Promise<UserDTO> {
    const user = await this.userService.findUserById(id);

    return UserMapper.fromEntityToDTO(user);
  }

  @Post()
  async create(@Body() user: UserDTO): Promise<UserDTO> {
    const createdUser = await this.userService.createUser(user);

    return UserMapper.fromEntityToDTO(createdUser);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() userUpdate: UserDTO
  ): Promise<UserEntity> {
    const updatedUser = await this.userService.updateUser(id, userUpdate);

    return UserMapper.fromEntityToDTO(updatedUser);
  }

  @Delete(":id")
  delete(@Param("id") id: number): void {
    return this.userService.deleteUser(id);
  }
}
