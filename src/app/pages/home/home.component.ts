import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(public storageService:StorageService){}

  async ngOnInit() {
      this.storageService.setLocalStorage('page',JSON.stringify('home'));
  }

}
