import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceDetailComponent } from './pages/resource-detail/resource-detail.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [
  { path: '', redirectTo: '/home?page=home', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent},
  { path: 'home', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resource', component: ResourceDetailComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**' , redirectTo: '/home?page=home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
