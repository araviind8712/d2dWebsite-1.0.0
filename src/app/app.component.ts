import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'd2dWebsite';
  pageHeight = 0;
  isCursorAtTop = false;
  isSecondPage = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.pageHeight = window.innerHeight;
    }
  }

  top() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.isCursorAtTop = event.clientY <= 90;
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition >= this.pageHeight) {
        this.isSecondPage=true;
      }
      else if(scrollPosition < this.pageHeight){
        this.isSecondPage=false;
      }
    }
  }
}
