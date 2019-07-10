import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { LoginComponent } from "./components/login/login.component";
import { SinginComponent } from "./components/singin/singin.component";
import { PostComponent } from "./components/post/post.component";



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'blog/:id', component: BlogComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SinginComponent },
    { path: 'post/:id', component: PostComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },

];
