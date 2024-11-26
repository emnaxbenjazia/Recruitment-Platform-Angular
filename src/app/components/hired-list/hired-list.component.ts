import { Component, OnInit } from '@angular/core';
import { EmbaucheService } from '../../services/embauche.service';
import { Cv } from '../../models/cv.model';

@Component({
  selector: 'app-hired-list',
  templateUrl: './hired-list.component.html',
  standalone: false,
  styleUrls: ['./hired-list.component.css'],
})
export class HiredListComponent implements OnInit {
  hiredCvs: Cv[] = [];

  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {
    this.hiredCvs = this.embaucheService.getHiredCvs();
  }
}
