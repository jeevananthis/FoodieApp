import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ReceipesListService } from '../receipes/receipes-list.service';
import { Recipe } from '../receipes/receipe.model';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {
  receipe:Recipe;
  showText:boolean = false;
  showSummery:boolean = true;
  constructor( private route: ActivatedRoute,
  private receipeService: ReceipesListService,
  private location: Location) { }

  ngOnInit() {
  this.getReceipe();
  }
  
  getReceipe(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.receipeService.getReceipe(id)
    .subscribe(receipe => this.receipe = receipe);
}

confirmOrder(){
this.showText = true;
this.showSummery = false;
}

}
