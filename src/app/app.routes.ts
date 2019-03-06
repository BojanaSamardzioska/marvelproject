import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import {FavHeroesComponent} from './fav-heroes/fav-heroes.component';

export const routes : Routes = [
    { path: '', redirectTo : 'login', pathMatch : 'full'},
    { path: 'login',component: LoginComponent},
    { path: 'user', component : UserComponent },
    { path: 'search/:query', component: SearchComponent },
    { path: 'profile', component : ProfileComponent},
    { path: 'details/:id', component: DetailsComponent},
    { path: 'fav-heroes', component: FavHeroesComponent }
]
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting{}
