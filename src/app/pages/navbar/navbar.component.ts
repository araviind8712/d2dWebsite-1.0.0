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

  constructor(private dialog: MatDialog, private route:ActivatedRoute) { 
    this.serviceMenu = serviceMenu;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((data)=>{
      let page = data.get('page') ??'home';
      this.isHome = page === "home";
      this.isServiceVisible = page === 'service';
      this.isCompany = page === 'company';
    })
    try {
      let page = 'home';
      this.isHome = page === "home";
      this.isServiceVisible = page === 'service';
      this.isCompany = page === 'company';
    } catch (e) {
      this.isHome = false;
      this.isServiceVisible = false;
      this.isCompany = false;
    }
  }

  toggleSecondaryNavbar(): void {
    this.isServiceVisible = !this.isServiceVisible;
  }

  openDialog(): void {
    this.dialog.open(ContactUsComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: 'auto',
      position: { bottom: '0px' },
      panelClass: 'custom-dialog'
    });
  }

  service(): void {
    this.isServiceVisible = true;
    this.isCompany = false;
    this.isHome = false;
  }

  company(): void {
    this.isServiceVisible = false;
    this.isCompany = true;
    this.isHome = false;
  }

  home(): void {
    this.isServiceVisible = false; // Fixed issue here
    this.isCompany = false;
    this.isHome = true;
    window.location.replace('/home?page=home');
  }

  redirect(image: string): void {
    try {
      const segments = image.split('/');
      if (segments.length > 2) {
        const page = segments[2].split('.')[0];
        window.location.href = `/services/${page}?page=service`;
      }
    } catch (e) {
      console.error('Invalid image path:', image);
    }
  }
}
