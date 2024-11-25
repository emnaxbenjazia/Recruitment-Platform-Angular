import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from 'C:/Users/ben jazia/TPsFrameworks/RecruitmentPlatform/src/app/models/cv.model';


@Component({
  selector: 'app-item',
  standalone: false,
  
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() cv!: Cv;
  @Output() cvSelected = new EventEmitter<Cv>();

  selectCv(): void {
    this.cvSelected.emit(this.cv);
  }
}