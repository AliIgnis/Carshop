import { Directive, ElementRef, OnDestroy, OnInit, NgZone } from '@angular/core';

const FADE_IN_THRESHOLD = 0.15;

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('fade-in');

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in--visible');
              this.observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: FADE_IN_THRESHOLD }
      );

      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
