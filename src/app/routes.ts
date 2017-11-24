import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ScreenComponent } from "./screen/screen.component";
import { RepoComponent } from './repo/repo.component';

export const routes: Routes = [
    { path : 'home', component: HomeComponent},
    { path : 'language/:lang', component: ScreenComponent},
    { path : 'repo/:name', component: RepoComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
]