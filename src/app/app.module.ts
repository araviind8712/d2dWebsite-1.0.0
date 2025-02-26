import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './pages/services/services.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ServiceMenuComponent } from './pages/service-menu/service-menu.component';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceDetailComponent } from './pages/resource-detail/resource-detail.component';
import { ResourceCardComponent } from '../shared/resource-card/resource-card.component';
import { GetintouchComponent } from '../shared/getintouch/getintouch.component';
import { FooterComponent } from '../shared/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    NavbarComponent,
    ServiceMenuComponent,
    ContactUsComponent,
    HomeComponent,
    AboutusComponent,
    ResourcesComponent,
    ResourceDetailComponent,
    ResourceCardComponent,
    FooterComponent,
    GetintouchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
