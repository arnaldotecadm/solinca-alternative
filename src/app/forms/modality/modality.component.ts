import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalityService } from './modality.service';

@Component({
  selector: 'app-modality',
  templateUrl: './modality.component.html',
  styleUrls: ['./modality.component.scss'],
})
export class ModalityComponent implements OnInit {
  modalityList$!: Observable<any>;

  constructor(private service: ModalityService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.modalityList$ = this.service.getAllModalities();
  }
}
