import { Component } from '@angular/core';
import { SERVICE_ITEMS } from '../../shared/data/landing.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  readonly services = SERVICE_ITEMS;
}
