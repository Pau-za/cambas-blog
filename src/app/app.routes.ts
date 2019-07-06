import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
// import { PostComponent } from "./components/post/post.component";
import { SearchComponent } from "./components/search/search.component";


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'post', component: PostComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },

];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}
