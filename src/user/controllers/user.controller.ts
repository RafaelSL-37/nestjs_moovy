import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserModel } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    findAll(): Observable<UserModel[]>{
        return this.userService.findAllUsers();
    }

    @Get(':id')
    findById(@Param() id:number): Observable<UserModel>{
        return this.userService.findUserById(id);
    }
    
    /*@Get('login/:s_email')
    findByName(@Param() s_email: string): Observable<UserModel>{
        return this.userService.findUserByName(s_email);
    }*/

    @Post()
    create(@Body() user:UserModel): Observable<UserModel>{
        return this.userService.createUser(user);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() user: UserModel): Observable<UpdateResult>{
        return this.userService.updateUser(id, user)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult>{
        return this.userService.deleteUser(id);
    }

}
