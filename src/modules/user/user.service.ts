import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
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

  async createUser(user: UserDTO): Promise<UserEntity> {
    const alreadyRegisteredUser = await this.findUserByEmail(user.email);

    if (alreadyRegisteredUser)
      throw new BadRequestException(
        "There is an user already registered with this email."
      );

    return this.userRepository.save(user);
  }

  findAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find({ relations: ["reviews"] });
  }

  //TODO: IMPLEMENT PAGINATION
  findAllUsersPaginated(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findUserById(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id, { relations: ["reviews"] });
  }

  async updateUser(id: string, userUpdate: UserDTO): Promise<UserEntity> {
    const user = await this.findUserById(id);

    if (user) {
      Object.assign(user, userUpdate);

      return this.userRepository.save(user);
    }

    throw new NotFoundException("User not found.");
  }

  deleteUser(id: number): any {
    return this.userRepository.delete(id);
  }

  findUserByEmail(email: string): Promise<ShortUserDTO> {
    return this.userRepository.findOne({ email });
  }
}
