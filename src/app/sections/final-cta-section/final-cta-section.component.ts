import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './final-cta-section.component.html',
  styleUrl: './final-cta-section.component.scss'
})
export class FinalCtaSectionComponent {}
