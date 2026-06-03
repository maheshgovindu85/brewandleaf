import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { SubCategory, Category } from '../../models/brew-and-leaf.models';

@Component({
  selector: 'app-sub-category-mgmt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sub-category-mgmt.component.html',
  styleUrls: ['./sub-category-mgmt.component.scss']
})
export class SubCategoryManagementComponent implements OnInit {
  subCategories: SubCategory[] = [];
  categories: Category[] = [];
  newSubCategory: SubCategory = {
    category_id: 0, name: '', description: '',
    category_name: undefined
  };
  showModal = false;
  isEditing = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getSubCategories().subscribe(data => this.subCategories = data);
    this.apiService.getCategories().subscribe(data => this.categories = data);
  }

  saveSubCategory(): void {
    if (this.isEditing && this.newSubCategory.id) {
      this.apiService.updateSubCategory(this.newSubCategory.id, this.newSubCategory).subscribe(() => {
        this.loadData();
        this.closeModal();
      });
    } else {
      this.apiService.addSubCategory(this.newSubCategory).subscribe(() => {
        this.loadData();
        this.closeModal();
      });
    }
  }

  editSubCategory(sub: SubCategory): void {
    this.newSubCategory = { ...sub };
    this.isEditing = true;
    this.showModal = true;
  }

  deleteSubCategory(id: number): void {
    if (confirm('Are you sure you want to delete this sub-category?')) {
      this.apiService.deleteSubCategory(id).subscribe(() => this.loadData());
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.isEditing = false;
    this.newSubCategory = { category_id: 0, name: '', description: '', category_name: ''
    };
  }
}
