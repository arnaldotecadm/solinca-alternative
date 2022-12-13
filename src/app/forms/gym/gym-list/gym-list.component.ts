import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GymService } from '../gym-list.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.scss'],
})
export class GymListComponent implements OnInit {
  gymList$ !: Observable<any>;

  constructor(private service: GymService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.gymList$ = this.service.getAll();
  }
}
