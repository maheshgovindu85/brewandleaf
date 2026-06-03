import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImportOption } from '../../app.models';
import { UploadContentComponent } from '../../components/upload-content/upload-content.component';
import { LinkedinContentComponent } from '../../components/linkedin-content/linkedin-content.component';

@Component({
  selector: 'app-screen-linkedin',
  standalone: true,
  imports: [UploadContentComponent, LinkedinContentComponent],
  templateUrl: './screen-linkedin.component.html',
  styleUrl: './screen-linkedin.component.scss'
})
export class ScreenLinkedinComponent {
  @Input() selectedImportId = 'linkedin';
  @Input() firstStepDone = true;

  @Output() selectImport = new EventEmitter<string>();
  @Output() next = new EventEmitter<void>();
}
