import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDataComponent } from '../app/show-data/show-data.component';


const routes: Routes = [
  {path: '', component:ShowDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
