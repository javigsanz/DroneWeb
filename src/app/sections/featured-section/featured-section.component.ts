import { Component } from '@angular/core';
import { FEATURED_STATS } from '../../shared/data/landing.data';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [CountUpDirective, RevealOnScrollDirective],
  templateUrl: './featured-section.component.html',
  styleUrl: './featured-section.component.scss'
})
export class FeaturedSectionComponent {
  readonly stats = FEATURED_STATS;
}
