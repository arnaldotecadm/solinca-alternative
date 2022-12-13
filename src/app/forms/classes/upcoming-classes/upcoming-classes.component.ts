import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ClassesService } from '../classees.service';

@Component({
  selector: 'app-upcoming-classes',
  templateUrl: './upcoming-classes.component.html',
  styleUrls: ['./upcoming-classes.component.scss'],
})
export class UpcomingClassesComponent implements OnInit {
  classeList$!: Observable<any>;
  allItemsOriginal: [] = <any>[];

  constructor(private service: ClassesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.classeList$ = this.service
      .getAllUpcomingClassesForUser(48)
      .pipe(tap((data: any) => (this.allItemsOriginal = data)));
  }

  filterData(className: string) {
    const filteredData = this.allItemsOriginal.filter((item: any) =>
      item.fullName.toUpperCase().includes(className.toUpperCase())
    );
    this.classeList$ = of(filteredData);
  }
}
