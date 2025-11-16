import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryHeader } from './Components/category-header/category-header';
import { CategoryList } from './Components/category-list/category-list';
import { CategoryEmptyState } from './Components/category-empty-state/category-empty-state';
import { CategoryForm } from './Components/category-form/category-form';

@Component({
  selector: 'app-category',
  imports: [CommonModule, CategoryHeader, CategoryList, CategoryEmptyState, CategoryForm],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  hasCategories = true; // Toggle this to show empty state
  showForm = false; // Toggle this to show form modal

  openAddCategoryForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  onSaveCategory(data: any) {
    console.log('Category saved:', data);
    // Here you would call your service to save the category
    this.showForm = false;
  }

  onFilterChange(filter: string) {
    console.log('Filter changed:', filter);
    // Handle filter change
  }

  onViewChange(view: string) {
    console.log('View changed:', view);
    // Handle view change
  }
}
