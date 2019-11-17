import { Component, OnInit } from '@angular/core';
import { PreparationService } from '../../services/preparation.service';
import { PreparationModel } from '../../models/preparation.model';
import AOS from 'aos';

@Component({
  selector: 'app-nclex-container',
  templateUrl: './nclex-container.component.html',
  styleUrls: ['./nclex-container.component.scss']
})
export class NclexContainerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
