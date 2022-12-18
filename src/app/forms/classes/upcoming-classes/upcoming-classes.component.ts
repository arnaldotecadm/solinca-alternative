import { Component, OnInit } from '@angular/core';
import { lastValueFrom, map, Observable, of, tap } from 'rxjs';
import { ClassesService } from '../classes.service';

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

  async loadData() {
    const bookedClasses = await lastValueFrom(
      this.service.getAllBookedClasses()
    );

    this.classeList$ = this.service
      .getAllUpcomingClassesForUser(48)
      .pipe(
        map((data: any[]) =>
          data.map((upcoming) => ({
            fullName: upcoming.fullName,
            id: upcoming.id,
            dateStart: upcoming.dateStart,
            bookingId: upcoming.bookingId,
            isAvailable: upcoming.isAvailable,
            alreadyBooked:
              bookedClasses.filter(
                (item: any) => item.bookingId == upcoming.bookingId
              ).length > 0,
          }))
        )
      )
      .pipe(tap((data: any) => (this.allItemsOriginal = data)));
  }

  filterData(className: string) {
    const filteredData = this.allItemsOriginal.filter((item: any) =>
      item.fullName.toUpperCase().includes(className.toUpperCase())
    );
    this.classeList$ = of(filteredData);
  }
}
