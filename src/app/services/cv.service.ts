import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model'; // Adjust based on your model's path

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [
    { id: 1, name: 'Ben Jazia', firstname: 'Emna', age: 36, cin: '12374251', job: 'Engineer', path: 'assets/ena.jpg' },
    { id: 2, name: 'Chaaben', firstname: 'Nour', age: 30, cin: '12345678', job: 'DevOps Engineer', path: '' },
    { id: 3, name: 'Ouederni', firstname: 'Ahmed', age: 25, cin: '32165498', job: 'Cloud Engineer', path: '' },
  ];

  getCvs(): Cv[] {
    return this.cvs;
  }
}
