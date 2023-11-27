import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './nav/menu/menu.component';
import { AccueilComponent } from './nav/accueil/accueil.component';
import { ContactComponent } from './nav/contact/contact.component';
import { LoginComponent } from './nav/login/login.component';
import { ListeactiviteComponent } from './nav/listeactivite/listeactivite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadminactviteComponent } from './listadminactvite/listadminactvite.component';
import { InfoComponent } from './nav/listeactivite/info/info.component';
import { AboutusComponent } from './nav/aboutus/aboutus.component';
import { AhmedPipe } from './pipes/ahmed.pipe';
import { DhiaPipe } from './pipes/dhia.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ContactComponent,
    LoginComponent,
    ListeactiviteComponent,
    DashboardComponent,
    ProfileComponent,
    ListadminactviteComponent,
    InfoComponent,
    AboutusComponent,
    AhmedPipe,
    DhiaPipe
  
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
