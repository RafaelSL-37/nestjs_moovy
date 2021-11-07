import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { UserModel } from '../models/user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    createUser(user: UserModel): Observable<UserModel>{
        return from(this.userRepository.save(user));
    }

    findAllUsers(): Observable<UserModel[]>{
        return from(this.userRepository.find({ relations: ['reviews'] }));
    }

    findUserById(id: number): Observable<UserModel>{
        return from(this.userRepository.findOne(id, { relations: ['reviews'] }));
    }

    /*findUserByName(s_email: string): Observable<UserModel>{
        return from(this.userRepository.findOne(
            { where: [{email : s_email}] }
        ));
    }*/

    updateUser(id: number, user: UserModel): Observable<UpdateResult>{
        return from(this.userRepository.update(id, user));
    }

    deleteUser(id: number): Observable<DeleteResult>{
        return from(this.userRepository.delete(id));
    }
}
