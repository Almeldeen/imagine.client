import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryHeader } from './Components/category-header/category-header';
import { CategoryList } from './Components/category-list/category-list';
import { CategoryEmptyState } from './Components/category-empty-state/category-empty-state';
import { CategoryForm } from './Components/category-form/category-form';

@Component({
  selector: 'app-category',
  imports: [CommonModule, CategoryHeader, CategoryList, CategoryEmptyState],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  private modalService = inject(NgbModal);
  hasCategories = true; // Toggle this to show empty state

  openAddCategoryForm() {
    const modalRef = this.modalService.open(CategoryForm, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      modalDialogClass: 'category-modal'
    });

    modalRef.result.then(
      (result) => {
        console.log('Category saved:', result);
        // Handle successful save
      },
      (dismissed) => {
        console.log('Modal dismissed:', dismissed);
        // Handle modal dismissal
      }
    );
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
