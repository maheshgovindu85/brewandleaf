import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../app.models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() navItems: NavItem[] = [];
  @Input() isOpen = true;
  @Input() theme: 'light' | 'dark' = 'light';
  
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() themeChange = new EventEmitter<'light' | 'dark'>();
  @Output() logout = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;
    this.themeChange.emit(theme);
  }

  onLogout() {
    this.logout.emit();
  }

  trackByLabel(index: number, item: NavItem) {
    return item.label;
  }
}
