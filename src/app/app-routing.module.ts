import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralDetailsComponent } from './general-details/general-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'new-account', pathMatch: 'full' },
  { path: 'general-details', component: GeneralDetailsComponent },

  // Add more routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
