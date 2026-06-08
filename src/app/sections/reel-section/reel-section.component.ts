import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { WORK_ITEMS } from '../../shared/data/landing.data';
import { WorkItem } from '../../shared/models/landing.models';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-reel-section',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './reel-section.component.html',
  styleUrl: './reel-section.component.scss'
})
export class ReelSectionComponent {
  readonly workItems = WORK_ITEMS;
  selectedWork: WorkItem | null = null;

  openModal(work: WorkItem): void {
    this.selectedWork = work;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedWork = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedWork) {
      this.closeModal();
    }
  }
}
