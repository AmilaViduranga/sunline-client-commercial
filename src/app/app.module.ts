import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppRouting }           from './app.routings';
import { AgmCoreModule }        from '@agm/core';

import { AppComponent }         from './app.component';
import { NavbarComponent }      from './navbar/navbar.component';
import { HomeComponent }        from './home/home.component';
import { FooterComponent }      from './footer/footer.component';
import { AboutUsComponent }     from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-JuozAwksmVpSB6-qCdtLHNglnnTnZpM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
