import { Component, OnDestroy, OnInit } from '@angular/core';
import { TESTIMONIALS } from '../../shared/data/landing.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent implements OnInit, OnDestroy {
  readonly testimonials = TESTIMONIALS;
  activeIndex = 0;
  private intervalId?: number;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    }, 5200);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goTo(index: number): void {
    this.activeIndex = index;
  }
}
