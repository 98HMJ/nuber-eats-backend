import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserReslover } from './users.resolver';
import { UserService } from './users.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from 'src/jwt/jwt.service';
import { Verification } from './entities/verification.entity';


@Module({
    imports:[TypeOrmModule.forFeature([User,Verification])],
    providers:[UserReslover, UserService],
    exports:[UserService],
})
export class UsersModule {}
