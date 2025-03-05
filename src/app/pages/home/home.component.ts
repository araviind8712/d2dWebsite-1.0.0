import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { log } from 'console';
import resourceList from '../../../assets/resources.json';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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

  constructor() {
    this.resources = resourceList;
  }

  scrollToIndex(index: number) {
    const element = document.querySelector(`[data-index="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
