import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private hiredCvs: Cv[] = [];
  
  hire(cv: Cv): void {
    if (!this.hiredCvs.find(hired => hired.id === cv.id)) {
      this.hiredCvs.push(cv);
    }
  }

  isAlreadyHired(cv: Cv): boolean {
    return this.hiredCvs.some((hiredCv) => hiredCv.id === cv.id); // Compare based on unique `id`
  }
  
  getHiredCvs(): Cv[] {
    return this.hiredCvs;
  }

}
