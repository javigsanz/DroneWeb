import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input() appCountUp = 0;
  @Input() duration = 1300;
  @Input() suffix = '';

  private observer?: IntersectionObserver;
  private rafId = 0;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateValue();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    this.observer.observe(element);
  }

  private animateValue(): void {
    const start = performance.now();
    const element = this.elementRef.nativeElement;

    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(this.appCountUp * eased);
      element.textContent = `${value}${this.suffix}`;

      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      }
    };

    this.rafId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.rafId);
  }
}
