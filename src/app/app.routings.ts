/**
 * Created by Amila on 12/12/2017.
 */
import { RouterModule, Routes }       from "@angular/router";
import { HomeComponent }              from "./home/home.component";
import { AboutUsComponent }           from "./about-us/about-us.component";

const appRoutes: Routes = [
  { path:'home', component: HomeComponent},
  { path: 'aboutus',  component:AboutUsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
