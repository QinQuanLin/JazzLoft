import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { ConfigService } from './config.service';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from './post/post.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagerService } from './pager.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    ClientsComponent,
    FooterComponent,
    PricingComponent,
    HeaderComponent,
    NavigationComponent,
    SocialComponent,
    BlogComponent,
    ArticleComponent,
    PostComponent,
    NotfoundComponent,
    PaginationComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    NavmenuComponent,
    SubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserDashboardModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ConfigService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
