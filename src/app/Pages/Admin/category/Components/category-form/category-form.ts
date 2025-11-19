import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-form',
  imports: [CommonModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.css',
})
export class CategoryForm {
  activeModal = inject(NgbActiveModal);
  
  // Image upload properties
  selectedFile: File | null = null;
  imagePreviewUrl: string | null = null;
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
      // Validate file type
      if (file.type.startsWith('image/')) {
        this.selectedFile = file;
        
        // Create preview using FileReader
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreviewUrl = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        // Reset if invalid file type
        this.clearImage();
        alert('Please select a valid image file (PNG, JPG, etc.)');
      }
    }
  }
  
  clearImage(event?: Event) {
    // Prevent event bubbling to avoid closing modal
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    this.selectedFile = null;
    this.imagePreviewUrl = null;
    
    // Clear the file input
    const fileInput = document.querySelector('.file-input') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
  
  onUploadAreaClick() {
    // Find the appropriate file input (visible or hidden)
    let fileInput = document.querySelector('.file-input:not(.hidden-input)') as HTMLInputElement;
    if (!fileInput) {
      fileInput = document.querySelector('.hidden-input') as HTMLInputElement;
    }
    if (fileInput) {
      fileInput.click();
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // Here you would collect form data including the image
    const formData = {
      name: 'Sample Category',
      description: 'Sample description',
      status: 'active',
      image: this.selectedFile
    };
    
    this.activeModal.close(formData);
  }

  onCancel() {
    this.activeModal.dismiss('cancel');
  }
}
