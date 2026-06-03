import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Category } from '../../models/brew-and-leaf.models';

@Component({
  selector: 'app-category-mgmt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-mgmt.component.html',
  styleUrls: ['./category-mgmt.component.scss']
})
export class CategoryManagementComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Category = { name: '', description: '' };
  showModal = false;
  isEditing = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe(data => this.categories = data);
  }

  saveCategory(): void {
    if (this.isEditing && this.newCategory.id) {
      this.apiService.updateCategory(this.newCategory.id, this.newCategory).subscribe(() => {
        this.loadCategories();
        this.closeModal();
      });
    } else {
      this.apiService.addCategory(this.newCategory).subscribe(() => {
        this.loadCategories();
        this.closeModal();
      });
    }
  }

  editCategory(cat: Category): void {
    this.newCategory = { ...cat };
    this.isEditing = true;
    this.showModal = true;
  }

  deleteCategory(id: number): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.apiService.deleteCategory(id).subscribe(() => this.loadCategories());
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.isEditing = false;
    this.newCategory = { name: '', description: '' };
  }
}
