import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { AppRouting }               from './app.routings';
import { AgmCoreModule }            from '@agm/core';
import { NgxPaginationModule }      from 'ngx-pagination';

import { AppComponent }             from './app.component';
import { NavbarComponent }          from './navbar/navbar.component';
import { HomeComponent }            from './home/home.component';
import { FooterComponent }          from './footer/footer.component';
import { AboutUsComponent }         from './about-us/about-us.component';
import { SilverPackageComponent }   from './silver-package/silver-package.component';
import { GoldPackageComponent }     from './gold-package/gold-package.component';
import { PlatinumPackageComponent } from './platinum-package/platinum-package.component';
import { CommercialComponent }      from './commercial/commercial.component';
import { FilmComponent }            from './film/film.component';
import { MusicVideoComponent }      from './music-video/music-video.component';
import { TeledramaComponent }       from './teledrama/teledrama.component';
import { CommentComponent }         from './comment/comment.component';

import { CommercialService }        from './commercial/commercial.service';
import { FilmService }              from './film/film.service';
import { BaseService }              from './base.service';
import { MusicVideoService }        from './music-video/music-video.service';
import { TeledramaService }         from './teledrama/teledrama.service';
import { CommentService }           from './comment/comment.service';

/*
 * pipes import
 * */
import { UrlFilter }                from './Pipes/UrlFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    SilverPackageComponent,
    GoldPackageComponent,
    PlatinumPackageComponent,
    CommercialComponent,
    UrlFilter,
    FilmComponent,
    MusicVideoComponent,
    TeledramaComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-JuozAwksmVpSB6-qCdtLHNglnnTnZpM'
    }),
    NgxPaginationModule
  ],
  providers: [
    CommercialService,
    FilmService,
    MusicVideoService,
    TeledramaService,
    CommentService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
