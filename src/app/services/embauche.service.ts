import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private hiredCvs: Cv[] = [];

  getHiredCvs(): Cv[] {
    return this.hiredCvs;
  }

  hire(cv: Cv): void {
    if (!this.hiredCvs.find(hired => hired.id === cv.id)) {
      this.hiredCvs.push(cv);
    }
  }
}
