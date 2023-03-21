import { Injectable } from '@angular/core';
import random from 'random';

//Types
import { Diet, DietFoodItem, Food, User } from '../models/database.type';

//Helper Libraries
import * as _ from "lodash";


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  public memory = new class {
    private diets: Diet[] = [
      {
        "id": 0,
        "userID": 1,
        "food": [
          { "potato": 500 },
          { "beans": 400 },
          { "fish": 300 },
        ],
      },
      {
        "id": 1,
        "userID": 1,
        "food": [
          { "potato": 500 },
          { "beans": 400 },
          { "fish": 300 },
        ],
      },
      {
        "id": 2,
        "userID": 2,
        "food": [
          { "potato": 500 },
          { "beans": 400 },
          { "fish": 300 },
        ],
      },
      {
        "id": 3,
        "userID": 2,
        "food": [
          { "potato": 500 },
          { "beans": 400 },
          { "fish": 300 },
        ],
      },
      {
        "id": 4,
        "userID": 3,
        "food": [
          { "potato": 500 },
          { "beans": 400 },
          { "fish": 300 },
        ],
      },
    ];

    private users: User[] = [];

    private food: Food[] = [];

    private currentID = 0;

    constructor() {
      //Generate Random Data
      let foodNames = "potato,bread,tomato,rice,fish,beef,chicken,mutton,pumpkin,brinjal,banana,mango,watermelon"
      let userNames = "david,john,jonathan,anderson,andrew,conan,brian,ryan,marcell,daith,mitchell,scarra,lily,mitchell,jay,gloria"
      let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      foodNames.split(",").forEach((item) => {
        this.food.push({
          "id": item,
          description,
          "calories": random.int(100, 1000),
          "name": item.charAt(0).toUpperCase() + item.slice(1),
        })
      });

      userNames.split(",").forEach((item, index) => {
        //Select random second name
        let userNameArray = userNames.split(",")
        let secondName = userNameArray[random.int(0, userNameArray.length - 1)]
        this.users.push({
          "id": index,
          "firstname": item.charAt(0).toUpperCase() + item.slice(1),
          "lastname": secondName.charAt(0).toUpperCase() + secondName.slice(1),
        })
      });

      for (let index = 0; index < userNames.split(",").length; index++) {

        let tmpFoodArr: DietFoodItem[] = Array(random.int(0, 10)).fill("").map((i) => {
          var tmpObj: DietFoodItem = {}
          let key = foodNames.split(",")[random.int(0, foodNames.split(",").length - 1)]
          tmpObj[key] = random.int(100, 600)

          return tmpObj;
        })
        this.diets.push({
          id: index,
          userID: random.int(0, userNames.split(",").length),
          food: tmpFoodArr,
        })
      }


    }

    /**
     * getDiets
     */
    public getDiets(): Diet[] {
      return this.diets;
    }

    /**
     * getUsers
     */
    public getUsers() {
      return this.users;
    }

    /**
     * createUser
     */
    public createUser(firstname: string, lastname: string):User {
      let newUser:User = {
        id: _.last(this.users) ? _.last(this.users)!.id + 1 : 0,
        firstname,
        lastname
      };
      
      this.users.push(newUser)

      return newUser;
    }

    /**
     * removeUser
     */
    public removeUser(id: Number) {
      _.remove(this.users, (item) => {
        return item.id == id;
      })
    }
  }
}
