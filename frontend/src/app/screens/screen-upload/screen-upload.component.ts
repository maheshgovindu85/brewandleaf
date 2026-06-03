import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImportOption } from '../../app.models';
import { UploadContentComponent } from '../../components/upload-content/upload-content.component';
import { LinkedinContentComponent } from '../../components/linkedin-content/linkedin-content.component';

@Component({
  selector: 'app-screen-upload',
  standalone: true,
  imports: [UploadContentComponent, LinkedinContentComponent],
  templateUrl: './screen-upload.component.html',
  styleUrl: './screen-upload.component.scss'
})
export class ScreenUploadComponent {
  @Input() selectedImportId = 'upload';
  @Input() firstStepDone = false;

  @Output() selectImport = new EventEmitter<string>();
  @Output() next = new EventEmitter<void>();
}
