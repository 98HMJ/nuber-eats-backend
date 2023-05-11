import { Restaurant } from './entities/restaurant.entitiy';
import { CreateRestaurantDto } from './dtos/create-restaurant.resolver';
import { RestaurantService } from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    restaurants(): Promise<Restaurant[]>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<boolean>;
    updateRestaurant(updateRestaurantDto: UpdateRestaurantDto): Promise<boolean>;
}
