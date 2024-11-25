import { Component, Input } from '@angular/core';
import { Cv } from 'C:/Users/ben jazia/TPsFrameworks/RecruitmentPlatform/src/app/models/cv.model';

@Component({
  selector: 'app-detail',
  standalone: false,
  
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() cv!: Cv | null;
}