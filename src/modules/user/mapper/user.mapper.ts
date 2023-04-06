import { UserEntity } from "../models/user.entity";
import { AuthUserDTO, ShortUserDTO, UserDTO } from "../models/user.dto";
import { BadRequestException } from "@nestjs/common";

export class UserMapper {
  static fromDTOtoEntity(dto: UserDTO): UserEntity {
    if (!dto) {
      throw new BadRequestException("Invalid input DTO");
    }

    const entity = new UserEntity();

    const fields = Object.getOwnPropertyNames(dto);

    fields.forEach((field) => {
      entity[field] = dto[field];
    });

    return entity;
  }

  static fromEntityToDTO(entity: UserEntity): UserDTO {
    const userDTO: UserDTO = {
      id: entity.id,
      updated_at: entity.updated_at,
      created_at: entity.created_at,
      deleted_at: entity.deleted_at,
      email: entity.email,
      name: entity.name,
      date_of_birth: entity.date_of_birth,
      reviews: entity.reviews,
      password: "[REDACTED]",
    };

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
