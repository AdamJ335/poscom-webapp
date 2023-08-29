import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from "@angular/router";
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    AboutComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'profile/:username',
        component: UserComponent
      },
      {
        path: 'profile',
        component: UserComponent
      },
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
