import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { SearchComponent } from "./components/search/search.component";


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },

];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}
