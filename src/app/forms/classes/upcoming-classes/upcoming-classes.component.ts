import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ClassesService } from '../classees.service';

@Component({
  selector: 'app-upcoming-classes',
  templateUrl: './upcoming-classes.component.html',
  styleUrls: ['./upcoming-classes.component.scss'],
})
export class UpcomingClassesComponent implements OnInit {
  classeList$!: Observable<any>;

  constructor(private service: ClassesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.classeList$ = this.service.getAllUpcomingClassesForUser(48)
  }
}
