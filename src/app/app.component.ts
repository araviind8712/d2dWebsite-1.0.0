import { Component, OnInit } from '@angular/core';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'd2dWebsite';

  constructor(public storageService:StorageService){}

  ngOnInit(): void {
    this.storageService.setLocalStorage('page','');
  }

}
