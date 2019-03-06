import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {FlexLayoutModule} from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ElementsPipe } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRouting } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { FavHeroesComponent } from './fav-heroes/fav-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ElementsPipe,
    DetailsComponent,
    ProfileComponent,
    SearchComponent,
    FavHeroesComponent],
/*    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule*/
  imports: [
    FormsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRouting,
    Ng2SearchPipeModule, //including into imports
    Ng2OrderModule, // importing the sorting package here
    NgxPaginationModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
