import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ReelSectionComponent } from './sections/reel-section/reel-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { FeaturedSectionComponent } from './sections/featured-section/featured-section.component';
import { PricingSectionComponent } from './sections/pricing-section/pricing-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section/testimonials-section.component';
import { FinalCtaSectionComponent } from './sections/final-cta-section/final-cta-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ReelSectionComponent,
    ServicesSectionComponent,
    FeaturedSectionComponent,
    PricingSectionComponent,
    TestimonialsSectionComponent,
    FinalCtaSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('J2 Drones | Produccion Aerea Cinematografica');
    this.meta.updateTag({
      name: 'description',
      content:
        'Capturamos tu proyecto con drones profesionales y enfoque cinematografico. Servicios premium para empresas, eventos, inmobiliaria y turismo.'
    });
    this.meta.updateTag({ property: 'og:title', content: 'J2 Drones' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Produccion audiovisual aerea premium con tecnologia de ultima generacion.'
    });
  }
}
