import { Module } from '@nestjs/common';
import { RestaurantResolver } from './restaurants.resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entitiy';
import { RestaurantService } from './restaurants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    providers:[RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}
