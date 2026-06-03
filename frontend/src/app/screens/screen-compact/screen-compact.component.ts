import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImportOption } from '../../app.models';
import { UploadContentComponent } from '../../components/upload-content/upload-content.component';
import { LinkedinContentComponent } from '../../components/linkedin-content/linkedin-content.component';

@Component({
  selector: 'app-screen-compact',
  standalone: true,
  imports: [UploadContentComponent, LinkedinContentComponent],
  templateUrl: './screen-compact.component.html',
  styleUrl: './screen-compact.component.scss'
})
export class ScreenCompactComponent {
  @Input() selectedImportId = 'upload';
  @Input() firstStepDone = false;

  @Output() next = new EventEmitter<void>();
}
