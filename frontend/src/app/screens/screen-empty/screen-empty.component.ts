import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-screen-empty',
  standalone: true,
  imports: [],
  templateUrl: './screen-empty.component.html',
  styleUrl: './screen-empty.component.scss'
})
export class ScreenEmptyComponent {
  @Output() selectMode = new EventEmitter<void>();
}
