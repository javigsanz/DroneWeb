import { Component } from '@angular/core';
import { PRICING_PACKAGES } from '../../shared/data/landing.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.scss'
})
export class PricingSectionComponent {
  readonly packages = PRICING_PACKAGES;
}
