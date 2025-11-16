import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-header',
  imports: [],
  templateUrl: './category-header.html',
  styleUrl: './category-header.css',
})
export class CategoryHeader {
  @Output() addCategory = new EventEmitter<void>();
  @Output() filterChange = new EventEmitter<string>();
  @Output() viewChange = new EventEmitter<string>();

  onAddCategory() {
    this.addCategory.emit();
  }

  onFilterChange(filter: string) {
    this.filterChange.emit(filter);
  }

  onViewChange(view: string) {
    this.viewChange.emit(view);
  }
}
