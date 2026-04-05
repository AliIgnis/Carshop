import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SCROLL_OFFSET, NAV_LINKS, INTERSECTION_THRESHOLD } from '../constants/app.constants';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly activeSectionSubject = new BehaviorSubject<string>('');
  readonly activeSection$ = this.activeSectionSubject.asObservable();

  private observer: IntersectionObserver | null = null;

  constructor(private readonly ngZone: NgZone) {}

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  initSectionObserver(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.ngZone.run(() => {
                this.activeSectionSubject.next(entry.target.id);
              });
            }
          }
        },
        {
          threshold: INTERSECTION_THRESHOLD,
          rootMargin: `-${SCROLL_OFFSET}px 0px 0px 0px`,
        }
      );

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.sectionId);
        if (el) {
          this.observer.observe(el);
        }
      }
    });
  }

  destroySectionObserver(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
