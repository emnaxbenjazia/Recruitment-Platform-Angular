import { Component, Input } from '@angular/core';
import { Cv } from 'C:/Users/ben jazia/TPsFrameworks/RecruitmentPlatform/src/app/models/cv.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone: false,
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  @Input() cv!: Cv;
  isFlipped = false;

  flipCard(flip: boolean): void {
    this.isFlipped = flip;
  }
}
