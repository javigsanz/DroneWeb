import { Component } from '@angular/core';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { HERO_VIDEO } from '../../shared/data/landing.data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ParallaxDirective, RevealOnScrollDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  readonly heroVideo = HERO_VIDEO;
}
