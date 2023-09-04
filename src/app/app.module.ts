import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './page/home/page-home.component';
import { PageAboutComponent } from './page/about/page-about.component';
import { PageContactComponent } from './page/contact/page-contact.component';
import { PageResumeComponent } from './page/resume/page-resume.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageHomeComponent,
    PageAboutComponent,
    PageContactComponent,
    PageResumeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: PageHomeComponent },
      { path: 'about', component: PageAboutComponent },
      { path: 'resume', component: PageResumeComponent },
      { path: 'contact', component: PageContactComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
