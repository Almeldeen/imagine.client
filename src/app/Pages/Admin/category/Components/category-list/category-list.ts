import { Component } from '@angular/core';
import { CategoryItem } from '../category-item/category-item';

@Component({
  selector: 'app-category-list',
  imports: [CategoryItem],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {

}
