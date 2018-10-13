import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipesComponent } from './receipes/receipes.component';
import { SummeryComponent } from './summery/summery.component';

const routes: Routes = [
 { path: '', redirectTo: '/receipes', pathMatch: 'full' },
 { path: 'receipes', component: ReceipesComponent },
 { path: 'summery/:id', component: SummeryComponent }
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
