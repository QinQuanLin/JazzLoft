// Angular routing module to navigate between various pages (components).

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { RouteguardService } from './routeguard.service';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { ForstaffComponent } from './forstaff/forstaff.component';

// A list of all paths. Add additional ones here.
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'dashboard', loadChildren: () => UserDashboardModule, canActivate: [RouteguardService] },
  { path: 'blog', component: BlogComponent},
  { path: 'article/:id', component: ArticleComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forstaff', component: ForstaffComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
