import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { generate } from 'rxjs';



const routes: Routes = [
  { path: '', component: NewAccountPageComponent },
  { path: 'second', component: GeneralDetailsComponent },
  // Other routes if any
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NewAccountPageComponent,
    GeneralDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
