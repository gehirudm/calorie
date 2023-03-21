export interface User {
    "id": number,
    "firstname": string,
    "lastname": string,
}

export interface Food {
    "id": string,
    "name": string,
    "description": string,
    "calories": number,
}

export interface DietFoodItem {
    [key: string]: number
}

export interface Diet {
    "id": number,
    "userID": number,
    "food": DietFoodItem[]
}