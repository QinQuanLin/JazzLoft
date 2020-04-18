import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouteguardService } from './routeguard.service';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ForstaffComponent } from './forstaff/forstaff.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: IntroComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ContentComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'subscribe', component: SubscribeComponent, outlet: 'popup' }, //any link that trigger this component will result in popup
  { path: 'dashboard', loadChildren: () => UserDashboardModule, canActivate: [RouteguardService] },
  { path: 'blog', component: BlogComponent},
  { path: 'article/:id', component: ArticleComponent },
  { path: 'article-edit/:id', component: ArticleEditComponent, canActivate: [RouteguardService] },
  { path: 'article-create', component: ArticleCreateComponent, canActivate: [RouteguardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forstaff', component: ForstaffComponent },
  { path: 'contactus', component: ContactusComponent, outlet: 'popup' },
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
