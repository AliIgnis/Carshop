import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { WHY_BYD_ITEMS_COUNT } from '../../constants/app.constants';

interface WhyBydItem {
  readonly titleKey: string;
  readonly bodyKey: string;
  readonly gradientFrom: string;
  readonly gradientTo: string;
  readonly patternType: 'waves' | 'circles' | 'diamonds';
}

@Component({
  selector: 'app-why-byd',
  standalone: true,
  imports: [CommonModule, TranslateModule, FadeInDirective],
  templateUrl: './why-byd.component.html',
  styleUrl: './why-byd.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyBydComponent {
  readonly items: readonly WhyBydItem[] = Array.from({ length: WHY_BYD_ITEMS_COUNT }, (_, i) => ({
    titleKey: `WHY_BYD.ITEM_${i + 1}_TITLE`,
    bodyKey: `WHY_BYD.ITEM_${i + 1}_BODY`,
    gradientFrom: ['#d4ede0', '#c5e8d5', '#b8dcc8'][i],
    gradientTo: ['#a8d5ba', '#7bbf92', '#2d6a4f'][i],
    patternType: (['waves', 'circles', 'diamonds'] as const)[i],
  }));
}
