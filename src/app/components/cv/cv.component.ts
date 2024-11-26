import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { EmbaucheService } from '../../services/embauche.service';
import { Cv } from '../../models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  standalone: false,
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null; 

  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService
  ) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }
    // Method to set the selected CV
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }


  hire(cv: Cv): void {
    this.embaucheService.hire(cv);
  }
}
