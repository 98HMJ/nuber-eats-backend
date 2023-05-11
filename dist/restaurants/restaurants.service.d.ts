import { Restaurant } from "./entities/restaurant.entitiy";
import { Repository } from "typeorm";
import { CreateRestaurantDto } from "./dtos/create-restaurant.resolver";
import { UpdateRestaurantDto } from "./dtos/update-restaurant.dto";
export declare class RestaurantService {
    private readonly restaurants;
    constructor(restaurants: Repository<Restaurant>);
    getAll(): Promise<Restaurant[]>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    updateRestaurant({ id, data }: UpdateRestaurantDto): Promise<import("typeorm").UpdateResult>;
}
