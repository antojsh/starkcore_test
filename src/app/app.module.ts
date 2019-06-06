import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app.router';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { ToggleComponent } from './toggle/toggle.component';
import { HeaderComponent } from './header/header.component';

import { environment } from '../environments/environment'

import { TravelsService } from './travels.service';
import { SearchPipe } from './search.pipe';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { DatePipe } from './date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    ToggleComponent,
    HeaderComponent,
    SearchPipe,
    AddTravelComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [TravelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
