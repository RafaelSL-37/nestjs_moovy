import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./models/user.entity";
import { ShortUserDTO, UserDTO } from "./models/user.dto";
import { UserMapper } from "./mapper/user.mapper";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository
  ) {}

  createUser(user: UserDTO): Promise<UserEntity> {
    const alreadyRegisteredUser = this.findUserByEmail(user.email);

    if (alreadyRegisteredUser)
      throw new BadRequestException(
        "There is an user already registered with this email."
      );

    return this.userRepository.save(user);
  }

  findAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find({ relations: ["reviews"] });
  }

  //TODO: fix pagination
  findAllUsersPaginated(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findUserById(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id, { relations: ["reviews"] });
  }

  updateUser(user: UserDTO): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  deleteUser(id: number): any {
    return this.userRepository.delete(id);
  }

  async findUserByEmail(email: string): Promise<ShortUserDTO> {
    const user = await this.userRepository.findOne(email);

    return UserMapper.fromEntityToShortUserDTO(user);
  }
}
