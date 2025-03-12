import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'D2D';
  pageHeight = 0;
  isCursorAtTop = false;
  isSecondPage = false;
  touchPoint: number = 300;
  touchEndY: number = 0;
  touchStartY: number = 0;

  constructor(private route: ActivatedRoute,private titleService: Title) {
    if (typeof window !== 'undefined') {
      this.pageHeight = window.innerHeight;
    }

    this.route.queryParamMap.subscribe((params)=>{
      this.title = params.get('page')==null ? 'D2D' : 'D2D - '+params.get('page');
      this.titleService.setTitle(this.title.toUpperCase());
    })

  }

  top() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 767) {
        this.isCursorAtTop = event.clientY <= 90;
      }
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    this.touchEndY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd() {
    if (this.touchEndY - this.touchStartY > 50 && this.touchStartY < 100) {
      this.isCursorAtTop=true;
    }else if(this.touchStartY - this.touchEndY > 50 ){
      this.isCursorAtTop=false;
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition >= this.pageHeight) {
        this.isSecondPage = true;
      }
      else if (scrollPosition < this.pageHeight) {
        this.isSecondPage = false;
      }
    }
  }
}
