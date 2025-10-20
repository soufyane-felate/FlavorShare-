import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipePostComponent } from './components/pages/recipe-post/recipe-post.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RecipeListComponent } from './components/pages/recipe-list/recipe-list.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'posts', component: RecipePostComponent},
  { path: 'list', component: RecipeListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'new', component: RecipePostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./components/pages/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
  { path: '**', component: NotFoundComponent },
];
