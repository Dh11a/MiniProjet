import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './nav/accueil/accueil.component';
import { ContactComponent } from './nav/contact/contact.component';
import { CalendrierComponent } from './nav/calendrier/calendrier.component';
import { LoginComponent } from './nav/login/login.component';
import { ListeactiviteComponent } from './nav/listeactivite/listeactivite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loginGuard } from './Services/login.guard';
import { ParamactComponent } from './dashboard/paramact/paramact.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ActiviteinfosComponent } from './nav/activiteinfos/activiteinfos.component';
import { AjouteractiviteComponent } from './dashboard/paramact/ajouteractivite/ajouteractivite.component';
import { ModifieractiviteComponent } from './dashboard/paramact/modifieractivite/modifieractivite.component';
import { ListadminactviteComponent } from './listadminactvite/listadminactvite.component';

const routes: Routes = [
  {path:'accueil',title:"Accueil",component:AccueilComponent},
  {path:'contact',title:"Contact",component:ContactComponent},
  {path:'calendrier',title:'Calendrier',component:CalendrierComponent},
  {path:'dashboard',title:'Dashboard',component:DashboardComponent,canActivate:[loginGuard],
  children:[
    {path:"paramact",title:"admin",component:ParamactComponent,
  children:[
    {path:"listeadmin",title:"listeadmin",component:ListadminactviteComponent},
    {path:"ajouter",title:"ajouter",component:AjouteractiviteComponent},
    {path:"modifier",title:"modifier",component:ModifieractiviteComponent},
    {path:'',redirectTo:'listeadmin',pathMatch:'full'},
    {path:'**',redirectTo:'listeadmin',pathMatch:"full"}
    
  ]},
    {path:"profile",title:"admin",component:ProfileComponent},
    {path:'',redirectTo:'paramact',pathMatch:'full'},
    {path:'**',redirectTo:'paramact',pathMatch:"full"}
  ]},
  {path:'login',title:'Authentification',component:LoginComponent},
  {path:'listeactivite',title:'Listeactivite',component:ListeactiviteComponent,
children:[
  {path:'info',title:"Activiteinfo",component:ActiviteinfosComponent},
]},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',redirectTo:'accueil',pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
