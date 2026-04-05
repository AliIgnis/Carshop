import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './services/scroll.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ModelsShowcaseComponent } from './components/models-showcase/models-showcase.component';
import { WhyBydComponent } from './components/why-byd/why-byd.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from './constants/app.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ModelsShowcaseComponent,
    WhyBydComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private readonly translateService: TranslateService,
    private readonly scrollService: ScrollService
  ) {
    this.translateService.addLangs([...AVAILABLE_LANGUAGES]);
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);

    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && AVAILABLE_LANGUAGES.includes(stored)) {
      this.translateService.use(stored);
    } else {
      const browserLang = navigator.language?.split('-')[0] ?? DEFAULT_LANGUAGE;
      const lang = AVAILABLE_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
      this.translateService.use(lang);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  }

  ngOnInit(): void {
    this.scrollService.initSectionObserver();
  }

  ngOnDestroy(): void {
    this.scrollService.destroySectionObserver();
  }
}
