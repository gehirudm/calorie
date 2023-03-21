export interface User {
    "id": Number,
    "firstname": String,
    "lastname": String,
}

export interface Food {
    "id": String,
    "name": String,
    "description": String,
    "calories": Number,
}

export interface DietFoodItem {
    [key: string]: number
}

export interface Diet {
    "id": Number,
    "userID": Number,
    "food": DietFoodItem[]
}