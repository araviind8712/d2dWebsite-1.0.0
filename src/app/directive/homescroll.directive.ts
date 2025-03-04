import { Directive,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appHomescroll]',
  standalone: false
})
export class HomescrollDirective{
  private isTransitioning = false;
  private lastScrollY = 0;
  private sections: HTMLElement[] = [];
  private currentSectionIndex = 0;
  private isMobile: boolean = window.innerWidth <= 768;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  ngAfterViewInit() {
    if (this.isMobile) return;
    this.sections = Array.from(this.el.nativeElement.children) as HTMLElement[];
  }

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    if (this.isMobile) return;
    if (this.isTransitioning) return;

    const scrollDown = event.deltaY > -100;
    if (scrollDown) {
      this.scrollToNextSection();
    } else {
      this.scrollToPrevSection();
    }
  }

  private scrollToNextSection() {
    if (this.currentSectionIndex < this.sections.length - 3) {
      this.currentSectionIndex++;
      this.autoScrollTo(this.sections[this.currentSectionIndex].offsetTop);
    }
  }

  private scrollToPrevSection() {
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--;
      this.autoScrollTo(this.sections[this.currentSectionIndex].offsetTop);
    }
  }

  private autoScrollTo(position: number) {
    this.isTransitioning = true;
    window.scrollTo({ top: position, behavior: 'smooth' });

    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);
  }
}
