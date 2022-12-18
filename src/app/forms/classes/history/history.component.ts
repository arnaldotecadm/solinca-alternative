import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalityService } from '../../modality/modality.service';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyList$!: Observable<any>;

  constructor(private service: ClassesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.historyList$ = this.service.getHistory();
  }
}
