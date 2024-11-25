import { Component } from '@angular/core';
import { Cv } from 'C:/Users/ben jazia/TPsFrameworks/RecruitmentPlatform/src/app/models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  standalone: false,
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvs: Cv[] = [
    {
      id: 1,
      name: 'Ben Jazia',
      firstname: 'Emna',
      age: 23,
      cin: '12371087',
      job: 'Student',
      path: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Chaaben',
      firstname: 'Nour',
      age: 25,
      cin: '87654321',
      job: 'Doctor',
      path: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'ouederni',
      firstname: 'ahmed',
      age: 35,
      cin: '87636621',
      job: 'Engineer',
      path: 'https://via.placeholder.com/150'
    },
  ];

  selectedCv: Cv | null = null;

  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
