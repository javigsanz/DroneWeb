import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { inject } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  sending = false;
  sent = false;

  private readonly fb = inject(FormBuilder);
  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    company: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]{7,20}$/)]],
    email: ['', [Validators.required, Validators.email]],
    projectType: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  get formControls() {
    return this.contactForm.controls;
  }

  isInvalid(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  submit(): void {
    if (this.contactForm.invalid || this.sending) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.sent = false;

    setTimeout(() => {
      this.sending = false;
      this.sent = true;
      this.contactForm.reset();
    }, 1200);
  }
}
