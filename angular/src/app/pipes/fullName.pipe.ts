import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/database.type';

@Pipe({
    name: 'fullNamePipe'
})

export class fullNamePipe implements PipeTransform {
    transform(value: User): String {
        return value.firstname.charAt(0).toUpperCase() + value.firstname.slice(1) + " " + value.lastname.charAt(0).toUpperCase() + value.lastname.slice(1)
    }
}