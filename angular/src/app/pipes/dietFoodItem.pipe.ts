import { Pipe, PipeTransform } from '@angular/core';
import { DietFoodItem } from '../models/database.type';

@Pipe({
    name: 'dietFoodItemPipe'
})

export class dietFoodItemPipe implements PipeTransform {
    transform(value: DietFoodItem): String {
        return `${Object.keys(value)[0]} : ${Object.values(value)[0]}`
    }
}