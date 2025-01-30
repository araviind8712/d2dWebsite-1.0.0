import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesComponent } from '../services/services.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import serviceMenu from '../../../assets/serviceMenu.json'
import { StorageService } from '../../shared/services/storage.service';



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

  constructor(private dialog: MatDialog,public storageService: StorageService) { 
    this.serviceMenu = serviceMenu;
  }

  ngOnInit(): void {
    try {
      const page = this.storageService.getLocalStorage('page');
      this.isHome = page === 'home';
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
    this.storageService.setLocalStorage('page', 'service');
    this.isServiceVisible = true;
    this.isCompany = false;
    this.isHome = false;
  }

  company(): void {
    this.storageService.setLocalStorage('page', 'company');
    this.isServiceVisible = false;
    this.isCompany = true;
    this.isHome = false;
  }

  home(): void {
    this.storageService.setLocalStorage('page', 'home');
    this.isServiceVisible = false; // Fixed issue here
    this.isCompany = false;
    this.isHome = true;
    window.location.replace('/home');
  }

  redirect(image: string): void {
    try {
      const segments = image.split('/');
      if (segments.length > 2) {
        const page = segments[2].split('.')[0];
        window.location.href = `http://localhost:4200/services/${page}`;
      }
    } catch (e) {
      console.error('Invalid image path:', image);
    }
  }
}
