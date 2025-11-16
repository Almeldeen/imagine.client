import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-form',
  imports: [CommonModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.css',
})
export class CategoryForm {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  onClose() {
    this.close.emit();
  }

  onBackdropClick() {
    this.close.emit();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // Here you would collect form data and emit it
    this.save.emit({});
    this.close.emit();
  }
}
