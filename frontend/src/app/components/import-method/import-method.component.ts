import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImportOption } from '../../app.models';

@Component({
  selector: 'app-import-method',
  standalone: true,
  imports: [],
  templateUrl: './import-method.component.html',
  styleUrl: './import-method.component.scss'
})
export class ImportMethodComponent {
  @Input() importOptions: ImportOption[] = [];
  @Input() selectedImportId = 'upload';
  @Input() firstStepDone = false;

  @Output() selectImport = new EventEmitter<string>();
}