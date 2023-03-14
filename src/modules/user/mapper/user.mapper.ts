import { UserEntity } from "../models/user.entity";
import { AuthUserDTO, ShortUserDTO, UserDTO } from "../models/user.dto";

export class UserMapper {
  static fromEntityToDTO(entity: UserEntity): UserDTO {
    const userDTO: UserDTO = {
      id: entity.id,
      updated_at: entity.updated_at,
      created_at: entity.created_at,
      deleted_at: entity.deleted_at,
      email: entity.email,
      name: entity.name,
      date_of_birth: entity.date_of_birth,
      gender: entity.gender,
      reviews: entity.reviews,
      password: entity.password,
    };

    delete userDTO.password;

    return userDTO;
  }

  static fromEntityToShortUserDTO(entity: UserEntity): ShortUserDTO {
    const shortUserDto: ShortUserDTO = {
      id: entity.id,
      updated_at: entity.updated_at,
      created_at: entity.created_at,
      name: entity.name,
      email: entity.email,
      password: entity.password,
      date_of_birth: entity.date_of_birth,
    };

    return shortUserDto;
  }

  static fromShortUserToAuthUser(shortUser: UserDTO): AuthUserDTO {
    const authUserDto: AuthUserDTO = {
      id: shortUser.id,
      name: shortUser.name,
    };

    return authUserDto;
  }
}
