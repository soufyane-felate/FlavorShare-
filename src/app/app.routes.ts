import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipePostComponent } from './components/pages/recipe-post/recipe-post.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RecipeListComponent } from './components/pages/recipe-list/recipe-list.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'posts', component: RecipePostComponent},
  { path: 'list', component: RecipeListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'new', component: RecipePostComponent },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./components/pages/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
];
