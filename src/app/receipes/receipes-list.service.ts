import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Recipe } from './receipe.model';

@Injectable({
  providedIn: 'root'
})
export class ReceipesListService {
 receipesList : Recipe[] = [ {
   id:1,
   name: 'Burger',
   description: 'Burger Description Going here',
   imagePath: 'https://previews.123rf.com/images/cookelma/cookelma1502/cookelma150200141/36986768-tasty-and-appetizing-hamburger-cheeseburger.jpg',
   catagory : ['Hamburger','Burger'],
   ratings : 4.3,
   price : 90
  },
  {
   id:2,
   name: 'Veg Roll',
   description: 'Veg Roll Description Going here',
   imagePath: 'https://previews.123rf.com/images/espies/espies1705/espies170500169/77587276-indian-popular-snack-food-called-vegetable-spring-rolls-or-veg-roll-or-veg-franky-or-veg-wrap-made-u.jpg',
   catagory : ['Delisious','Roll'],
   ratings : 4,
   price : 100
  
  
  },
  {
   id:3,
   name: 'Pasta',
   description: 'Burger Description Going here',
   imagePath: 'https://previews.123rf.com/images/cookelma/cookelma1502/cookelma150200141/36986768-tasty-and-appetizing-hamburger-cheeseburger.jpg',
   catagory : ['Pasta','Chinese'],
   ratings : 3.5,
   price : 70
  
  
  },
   {
   id:4,
   name: 'Grilled Shrimp',
   description: 'Burger Description Going here',
   imagePath: 'https://previews.123rf.com/images/maximkostenko/maximkostenko1109/maximkostenko110900002/10543142-shrimp-grilled-with-beer.jpg',
   catagory : ['Hamburger','Burger'],
   ratings : 4,
   price : 140
  },
  {
   id:5,
   name: 'Gastronomy',
   description: 'Gastronomy Description Going here',
   imagePath: 'https://previews.123rf.com/images/yeko/yeko1505/yeko150500851/40021684-gastronomy-delicious-food-on-a-dish.jpg',
   catagory : ['Delisious','Vegroll'],
   ratings : 4.7,
   price : 170
  
  
  },
  {
   id:6,
   name: 'Grilled salmon',
   description: 'Grilled salmon Description Going here',
   imagePath: 'https://previews.123rf.com/images/gbh007/gbh0071506/gbh007150600308/41514835-grilled-salmon-and-vegetables.jpg',
   catagory : ['Pasta','Chinese'],
   ratings : 3.8,
   price : 160
  
  
  }]; 

  constructor(private http: HttpClient) { }
  



 /*getRecipes() {
    this.http.get('http://demo6638808.mockable.io/')
    
    .pipe(map(
        (response: Response) => {
          const receipesList: Recipe[] = response.json();
          return receipesList;
        }
      ));
  }*/
  
  getReceipe(id: number): Observable<Recipe> {
 
  return of(this.receipesList.find(receipe => receipe.id === id));
  }
}
