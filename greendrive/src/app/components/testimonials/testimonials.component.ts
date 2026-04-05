import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { TESTIMONIALS, TESTIMONIAL_MAX_STAR_RATING } from '../../constants/app.constants';
import { Testimonial } from '../../models/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule, FadeInDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  readonly testimonials: readonly Testimonial[] = TESTIMONIALS;
  readonly maxRating = TESTIMONIAL_MAX_STAR_RATING;

  getStars(rating: number): string {
    const filled = '★'.repeat(rating);
    const empty = '☆'.repeat(this.maxRating - rating);
    return filled + empty;
  }
}
