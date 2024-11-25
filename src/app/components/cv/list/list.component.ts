import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from 'C:/Users/ben jazia/TPsFrameworks/RecruitmentPlatform/src/app/models/cv.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: false,
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() cvs!: Cv[];
  @Output() cvSelected = new EventEmitter<Cv>();

  selectCv(cv: Cv): void {
    this.cvSelected.emit(cv);
  }
}
