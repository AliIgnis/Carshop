import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_LOCATION } from '../../constants/app.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly email = CONTACT_EMAIL;
  readonly phone = CONTACT_PHONE;
  readonly location = CONTACT_LOCATION;

  constructor(private readonly translateService: TranslateService) {}

  getMailtoHref(): string {
    const subject = encodeURIComponent(
      this.translateService.instant('CONTACT.EMAIL_SUBJECT')
    );
    return `mailto:${this.email}?subject=${subject}`;
  }

  getTelHref(): string {
    return `tel:${this.phone.replace(/\s/g, '')}`;
  }
}
