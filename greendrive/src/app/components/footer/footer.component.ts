import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';
import {
  NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_LOCATION,
  COPYRIGHT_YEAR, BRAND_NAME, AVAILABLE_LANGUAGES, LANGUAGE_STORAGE_KEY
} from '../../constants/app.constants';
import { NavLink } from '../../models/nav-link.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly navLinks: readonly NavLink[] = NAV_LINKS;
  readonly email = CONTACT_EMAIL;
  readonly phone = CONTACT_PHONE;
  readonly location = CONTACT_LOCATION;
  readonly year = COPYRIGHT_YEAR;
  readonly brand = BRAND_NAME;
  readonly languages: readonly string[] = AVAILABLE_LANGUAGES;

  constructor(
    private readonly scrollService: ScrollService,
    readonly translateService: TranslateService
  ) {}

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  switchLanguage(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }
}
