import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, NgZone, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { log } from 'console';
import resourceList from '../../../assets/resources.json';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChildren('section') sections!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild('videoPlayer', { static: false }) video!: ElementRef;
  progress = 2;
  isLoading: Boolean = true;
  currentIndex: number = 1;
  resources: any;
  progressWidth = '0%';
  duration = 3;
  isLoadingAnimation: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {
    this.resources = resourceList;
  }

  scrollToIndex(index: number) {
    const element = document.querySelector(`[data-index="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  loaded() {
    this.isLoadingAnimation = false;
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
    this.cdr.detectChanges();
  }
}
