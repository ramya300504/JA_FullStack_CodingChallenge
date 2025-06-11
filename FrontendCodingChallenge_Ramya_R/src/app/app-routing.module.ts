import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { DisplayComponent } from './components/display/display.component';
import { SearchComponent } from './components/search/search.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"addplayer",component:AddComponent},
  {path:"updateplayer",component:UpdateComponent},
  {path:"displayall",component:DisplayComponent},
  { path: "search/:input", component: SearchComponent },
  {path:"delete/:input",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
