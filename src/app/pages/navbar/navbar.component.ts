import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesComponent } from '../services/services.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import serviceMenu from '../../../assets/serviceMenu.json'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  serviceMenu: any;
  isServiceVisible = false;
  isHome = false;
  isCompany = false;
  isCompDropdown = false;
  serviceVisible = false;
  pageName:any;

  constructor(private dialog: MatDialog, private route:ActivatedRoute) { 
    this.serviceMenu = serviceMenu;
    
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((data)=>{
      this.pageName =data.get('page');
      this.isHome = data.get('page') === "home";
      this.isServiceVisible = data.get('page') === 'service';
      console.log(this.isServiceVisible);
      this.isCompany = data.get('page') === 'company';
    })
  }

  toggleSecondaryNavbar(): void {
    this.isServiceVisible = !this.isServiceVisible;
  }

  openDialog(): void {
    this.dialog.open(ContactUsComponent, {
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: 'fit-content',
      position: { bottom: '0px' },
      panelClass: 'custom-dialog'
    });
  }

  service(service:boolean): void {
    this.isServiceVisible = true;
    this.serviceVisible = !service;
    this.isCompany = false;
    this.isHome = false;
    this.isCompDropdown=false;
  }

  company(route:any): void {
    this.isServiceVisible = false;
    this.isCompany = true;
    this.isHome = false;
    window.location.replace('/d2dWebsite-1.0.0/'+route+'?page='+route);
  }

  home(): void {
    this.isServiceVisible = false; // Fixed issue here
    this.isCompany = false;
    this.isHome = true;
    window.location.href = '/d2dWebsite-1.0.0/home?page=home';
  }

  redirect(image: string): void {
    try {
      const segments = image.split('/');
      if (segments.length > 2) {
        const page = segments[2].split('.')[0];
        window.location.href = `/d2dWebsite-1.0.0/services?service=${page}&page=service`;
      }
    } catch (e) {
      console.error('Invalid image path:', image);
    }
  }

}
