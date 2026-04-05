import { Component, ChangeDetectionStrategy, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';
import { NAV_LINKS, AVAILABLE_LANGUAGES, LANGUAGE_STORAGE_KEY } from '../../constants/app.constants';
import { NavLink } from '../../models/nav-link.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly navLinks: readonly NavLink[] = NAV_LINKS;
  readonly languages: readonly string[] = AVAILABLE_LANGUAGES;
  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly activeSection$;

  constructor(
    private readonly scrollService: ScrollService,
    readonly translateService: TranslateService
  ) {
    this.activeSection$ = this.scrollService.activeSection$;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 0);
  }

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
    this.isMobileMenuOpen.set(false);
  }

  switchLanguage(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }
}
