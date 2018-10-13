import { Component, OnInit } from '@angular/core';
import { Recipe } from './receipe.model';
import { ReceipesListService } from './receipes-list.service'

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {

 /* recipe : Recipe = {
   name: 'Burger';
   description: 'Burger Description Going here';
   imagePath: 'https://previews.123rf.com/images/cookelma/cookelma1502/cookelma150200141/36986768-tasty-and-appetizing-hamburger-cheeseburger.jpg';
   catagory : ['Hamburger','Burger'];
   ratings : 4;
   price : 90;
  
  
  }*/
  
  searchParam : string;
  defaultHighToLowRating :boolean = false;
  defaultLowToHighPrice :boolean = false;


  
  receipes : Recipe[];

  constructor( private recipesListService : ReceipesListService ) { }

  ngOnInit() {
  this.receipes = this.recipesListService.receipesList;
  //this.receipes = this.recipesListService.getRecipes();
  }
  

  
  sortBy(sortByCatagory:string){
      if(sortByCatagory == 'Rating'){

           this.defaultHighToLowRating = !this.defaultHighToLowRating;
           if(sortByCatagory == 'Rating' && this.defaultHighToLowRating){
            return this.receipes.sort((a,b) => (a.ratings > b.ratings) ? 1 : ((b.ratings > a.ratings) ? -1 : 0));
           }else{
           return this.receipes.sort((a,b) => (a.ratings > b.ratings) ? -1 : ((b.ratings > a.ratings) ? 1 : 0));
           }

      }

      if(sortByCatagory == 'Price'){
          this.defaultLowToHighPrice = !this.defaultLowToHighPrice;
          if(sortByCatagory == 'Price' && this.defaultLowToHighPrice){
              return this.receipes.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
           }else{
              return this.receipes.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0));
           }

      }
  }

}
