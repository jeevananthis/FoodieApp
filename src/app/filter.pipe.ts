import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './receipes/receipe.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
transform(items: Recipe[], searchText: any): Recipe[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    /* return items.filter( it => {
      return it.price == searchText;
    }); */
    
    return items.filter( it => {
      return it.name.toLowerCase().indexOf(searchText) !== -1 ;
    }); 
    
   }

 }



