import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './nav/menu/menu.component';
import { AccueilComponent } from './nav/accueil/accueil.component';
import { ContactComponent } from './nav/contact/contact.component';
import { CalendrierComponent } from './nav/calendrier/calendrier.component';
import { LoginComponent } from './nav/login/login.component';
import { ListeactiviteComponent } from './nav/listeactivite/listeactivite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParamactComponent } from './dashboard/paramact/paramact.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActiviteinfosComponent } from './nav/activiteinfos/activiteinfos.component';
import { AjouteractiviteComponent } from './dashboard/paramact/ajouteractivite/ajouteractivite.component';
import { ModifieractiviteComponent } from './dashboard/paramact/modifieractivite/modifieractivite.component';
import { ListadminactviteComponent } from './listadminactvite/listadminactvite.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ContactComponent,
    CalendrierComponent,
    LoginComponent,
    ListeactiviteComponent,
    DashboardComponent,
    ParamactComponent,
    ProfileComponent,
    ActiviteinfosComponent,
    AjouteractiviteComponent,
    ModifieractiviteComponent,
    ListadminactviteComponent,
    ModifieractiviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
