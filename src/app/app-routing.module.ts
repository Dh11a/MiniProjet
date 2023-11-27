import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './nav/accueil/accueil.component';
import { ContactComponent } from './nav/contact/contact.component';
import { LoginComponent } from './nav/login/login.component';
import { ListeactiviteComponent } from './nav/listeactivite/listeactivite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loginGuard } from './Services/login.guard';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ListadminactviteComponent } from './listadminactvite/listadminactvite.component';
import { InfoComponent } from './nav/listeactivite/info/info.component';
import { AboutusComponent } from './nav/aboutus/aboutus.component';

const routes: Routes = [
  { path: 'accueil', title: 'Accueil', component: AccueilComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  {path:'aboutus',title:'About us',component:AboutusComponent},
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent, canActivate: [loginGuard],
    children: [
      { path: 'listeadmin', title: 'listeadmin', component: ListadminactviteComponent },
      { path: 'profile', title: 'admin', component: ProfileComponent },
      { path: '', redirectTo: 'listeadmin', pathMatch: 'full' },
      { path: '**', redirectTo: 'listeadmin', pathMatch: 'full' }
    ]
  },
  { path: 'login', title: 'Authentification', component: LoginComponent },
  { path: 'listeactivite', title: 'Listeactivite', component: ListeactiviteComponent },
  { path: 'listeactivite/:identif', title: 'Infos', component: InfoComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'accueil', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
