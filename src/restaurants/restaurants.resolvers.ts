import { Args, Query, Resolver, Mutation } from '@nestjs/graphql'
import { Restaurant } from './entities/restaurant.entitiy';
import { CreateRestaurantDto } from './dtos/create-restaurant.resolver';
import { RestaurantService } from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';

@Resolver(of => Restaurant)
export class RestaurantResolver{
    constructor(private readonly restaurantService: RestaurantService){}
    @Query(returns=>[Restaurant])
    restaurants():Promise<Restaurant[]>{
        return this.restaurantService.getAll();
    }
    @Mutation(returns => Boolean)
    async createRestaurant(@Args('input') createRestaurantDto: CreateRestaurantDto,):Promise<boolean>{
        try{
            await this.restaurantService.createRestaurant(createRestaurantDto);
        }catch(e){
            console.log(e)
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async updateRestaurant(@Args('input') updateRestaurantDto: UpdateRestaurantDto,) : Promise<boolean>{
        try{
            await this.restaurantService.updateRestaurant(updateRestaurantDto);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }
}