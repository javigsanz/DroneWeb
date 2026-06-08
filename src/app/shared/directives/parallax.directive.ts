import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  NgZone,
  OnDestroy,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() speed = 0.12;
  @HostBinding('style.transform') transform = 'translate3d(0, 0, 0)';

  private rafId = 0;
  private yOffset = 0;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const onScroll = () => {
        if (this.rafId) {
          cancelAnimationFrame(this.rafId);
        }

        this.rafId = requestAnimationFrame(() => {
          const rect = this.elementRef.nativeElement.getBoundingClientRect();
          const offset = (window.innerHeight - rect.top) * this.speed;
          this.yOffset = Math.min(Math.max(offset, -50), 50);
          this.transform = `translate3d(0, ${this.yOffset}px, 0)`;
        });
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      this.cleanup = () => window.removeEventListener('scroll', onScroll);
    });
  }

  private cleanup: (() => void) | null = null;

  ngOnDestroy(): void {
    this.cleanup?.();
    cancelAnimationFrame(this.rafId);
  }
}
