import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolleffects]',
  standalone: false
})
export class ScrolleffectsDirective {
  private isTransitioning = false;
  private lastScrollY = 0;
  private section1!: HTMLElement;
  private section2!: HTMLElement;
  private text!: HTMLElement;
  private image!: HTMLElement;
  private section2Reached = false; // Allow free scrolling after Section 2
  private isMobile: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  ngAfterViewInit() {
    if (this.isMobile) return;
    const sections = this.el.nativeElement.querySelectorAll('.section, .section1, .section2');
    if (sections.length < 2) return;

    this.section1 = sections[0] as HTMLElement;
    this.section2 = sections[1] as HTMLElement;
    this.text = this.section1.querySelector('p')!;
    this.image = this.section1.querySelector('img')!;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isMobile) return;
    if (!this.section1 || !this.section2 || !this.text || !this.image) return;
    if (this.isTransitioning) return;
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;
    }
    const fadeStart = this.section1.offsetTop;
    const fadeEnd = fadeStart + 400;
    const section2Start = this.section2.offsetTop;
    const isScrollingDown = scrollY > this.lastScrollY;
    this.lastScrollY = scrollY; // Update last scroll position

    // **Fade Text & Move Image Up ONLY when Scrolling Down**
    if (isScrollingDown && scrollY >= fadeStart && scrollY <= fadeEnd) {
      let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      opacity = Math.max(opacity, 0);
      // this.renderer.setStyle(this.text, 'opacity', opacity.toString());

      const moveUpValue = Math.min((scrollY - fadeStart) * 0.8, 200);
      this.renderer.setStyle(this.image, 'transform', `translateY(-${moveUpValue}px)`);
    }

    // **Prevent Moving Image Up When Scrolling Up**
    if (!isScrollingDown && scrollY < fadeEnd) {
      // this.renderer.setStyle(this.image, 'transform', `translateY(0)`);
      this.smoothTransform(this.image, 0);
    }

    // **Auto-scroll to Section 2 (Once)**
    if (!this.section2Reached && scrollY >= fadeEnd && isScrollingDown) {
      this.autoScrollTo(this.section2.offsetTop, false, true);
    }

    // **Auto-scroll back to Section 1 when scrolling up**
    if (scrollY < section2Start - 100 && !isScrollingDown) {
      this.autoScrollTo(this.section1.offsetTop, true);
    }
  }

  private smoothTransform(element: HTMLElement, targetValue: number) {
    let currentValue = parseFloat(getComputedStyle(element).transform.split(',')[5]) || 0;

    const step = () => {
      currentValue += (targetValue - currentValue) * 0.2; // Adjust easing for smooth effect
      if (Math.abs(currentValue - targetValue) < 1) {
        this.renderer.setStyle(element, 'transform', `translateY(${targetValue}px)`);
        return;
      }

      this.renderer.setStyle(element, 'transform', `translateY(${currentValue}px)`);
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  private autoScrollTo(position: number, reverse: boolean = false, unlockScroll = false) {
    this.isTransitioning = true;
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: position, behavior: 'smooth' });
    }

    setTimeout(() => {
      this.isTransitioning = false;

      if (reverse) {
        // Reset styles when returning to Section 1
        // this.renderer.setStyle(this.text, 'opacity', '1');
        // this.renderer.setStyle(this.image, 'transform', 'translateY(0px)');
        this.smoothTransform(this.image, 0);

        // Reset flag to allow animation again when scrolling down
        this.section2Reached = false;
      }

      // Allow free scrolling beyond Section 2
      if (unlockScroll) {
        this.section2Reached = true;
      }
    }, 500);
  }

}
