import { Directive,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appHomescroll]',
  standalone: false
})
export class HomescrollDirective{
  sections: HTMLElement[] = [];
  isLocked = false; // Prevent multiple scroll triggers
  currentSectionIndex = 0; // Track the section index

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.sections = Array.from(this.el.nativeElement.querySelectorAll('div[id^="section"]'));
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isLocked) return;

    const direction = event.deltaY > 0 ? 1 : -1; // Scroll down = 1, Scroll up = -1
    const nextIndex = this.currentSectionIndex + direction;

    // Handle transition for first two sections only
    if (nextIndex >= 0 && nextIndex <= 2) {
      event.preventDefault();
      this.scrollToSection(nextIndex);
    } else {
      this.currentSectionIndex = nextIndex; // Allow normal scrolling beyond section 2
    }
  }

  scrollToSection(index: number) {
    if (index < 0 || index >= this.sections.length) return;

    this.isLocked = true;
    this.sections[index].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      this.currentSectionIndex = index;
      this.isLocked = false;
    }, 700); // Timeout to avoid multiple triggers
  }
}
