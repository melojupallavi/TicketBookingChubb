import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DialogComponent } from './dialog/dialog.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { ListofmoviesComponent } from './listofmovies/listofmovies.component';

const routes: Routes = [
  { path: 'movies', component: ListofmoviesComponent }, 
  { path: 'details', component: DetailsComponent }, 
  { path: '', component:HomeComponent },
  { path: 'display', component:DisplayComponent },
  { path: 'dialog', component:DialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
