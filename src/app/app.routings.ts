/**
 * Created by Amila on 12/12/2017.
 */
import { RouterModule, Routes }       from "@angular/router";
import { HomeComponent }              from "./home/home.component";
import { AboutUsComponent }           from "./about-us/about-us.component";
import { SilverPackageComponent }     from "./silver-package/silver-package.component";
import { GoldPackageComponent }       from "./gold-package/gold-package.component";
import { PlatinumPackageComponent }   from "./platinum-package/platinum-package.component";
import { CommercialComponent }        from "./commercial/commercial.component";

const appRoutes: Routes = [
  { path:'home', component: HomeComponent},
  { path: 'aboutus',  component:AboutUsComponent},
  { path:'silver', component:SilverPackageComponent},
  { path:'gold', component: GoldPackageComponent},
  { path:'platinum', component: PlatinumPackageComponent},
  { path:'commercial', component: CommercialComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
