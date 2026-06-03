import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkflowMode } from '../../app.models';

@Component({
  selector: 'app-screen-workflow',
  standalone: true,
  imports: [],
  templateUrl: './screen-workflow.component.html',
  styleUrl: './screen-workflow.component.scss'
})
export class ScreenWorkflowComponent {
  @Input() isWorkflowModalOpen = false;
  @Input() workflowModes: WorkflowMode[] = [];
  @Input() selectedWorkflowModeId = 'advanced';

  @Output() openModal = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() chooseMode = new EventEmitter<string>();
}
