import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CAR_MODELS } from '../../constants/app.constants';
import { CarModel } from '../../models/car-model.interface';

@Component({
  selector: 'app-models-showcase',
  standalone: true,
  imports: [CommonModule, TranslateModule, FadeInDirective],
  templateUrl: './models-showcase.component.html',
  styleUrl: './models-showcase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsShowcaseComponent {
  readonly models: readonly CarModel[] = CAR_MODELS;

  formatPrice(price: number): string {
    return '€' + price.toLocaleString('de-DE');
  }
}
