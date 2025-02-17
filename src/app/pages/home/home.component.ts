import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { log } from 'console';
import resourceList from '../../../assets/resources.json';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChildren('section') sections!: QueryList<ElementRef<HTMLDivElement>>;
  
  currentIndex: number = 1;
  resources:any;

  constructor(){
    this.resources=resourceList;
  }

  scrollToIndex(index: number) {
    const element = document.querySelector(`[data-index="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
