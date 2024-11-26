import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { EmbaucheService } from '../../services/embauche.service';
import { Cv } from '../../models/cv.model';
import { ToastrService } from 'ngx-toastr';

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
    private embaucheService: EmbaucheService,
    private toastr: ToastrService // Injecting ToastrService
  ) {}


  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }

  // Method to set the selected CV
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }

  // Method to hire a CV
  hire(cv: Cv): void {
    // Check if the CV is already hired
    if (this.embaucheService.isAlreadyHired(cv)) {
      this.toastr.warning('This CV has already been hired.', 'Warning'); // Display warning
      return;
    }

    // Hire the CV and show success message
    this.embaucheService.hire(cv);
    this.toastr.success(`${cv.firstname} ${cv.name} has been successfully hired.`, 'Success');
  }
}
