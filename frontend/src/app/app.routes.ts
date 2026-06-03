import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ProductManagementComponent } from './pages/product-mgmt/product-mgmt.component';
import { BillingComponent } from './pages/billing/billing.component';
import { CategoryManagementComponent } from './pages/category-mgmt/category-mgmt.component';
import { SubCategoryManagementComponent } from './pages/sub-category-mgmt/sub-category-mgmt.component';
import { StatsComponent } from './pages/admin-dashboard/stats/stats.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: StatsComponent },
      { path: 'categories', component: CategoryManagementComponent },
      { path: 'sub-categories', component: SubCategoryManagementComponent },
      { path: 'products', component: ProductManagementComponent },
      { path: 'billing', component: BillingComponent }
    ]
  }
];
