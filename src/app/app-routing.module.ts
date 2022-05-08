import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CanaccesGuard } from './guards/canacces.guard';
import { Profile } from './profileTemplate';
const routes: Routes = [
  { path: 'portfolio',component: PortfolioComponent},// , canActivate: [CanaccesGuard]},
  { path: 'login',  component: LoginComponent  },
  {path: 'profile', component: ProfileComponent, canActivate: [CanaccesGuard]},
  { path: '',  component: PortfolioComponent, pathMatch: 'full'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
