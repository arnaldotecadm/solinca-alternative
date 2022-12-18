import { Component, OnInit } from '@angular/core';
import { lastValueFrom, map, Observable, of, tap } from 'rxjs';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-upcoming-classes',
  templateUrl: './upcoming-classes.component.html',
  styleUrls: ['./upcoming-classes.component.scss'],
})
export class UpcomingClassesComponent implements OnInit {
  classeList$!: Observable<any>;
  allItemsOriginal: [] = <any>[];

  constructor(
    private service: ClassesService,
    private notificationService: NotificationService
  ) {}

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
            gymId: upcoming.gymId,
            cancelId: upcoming.cancelId,
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

  bookClass(clazz: any) {
    const classInfo = {
      bookingId: clazz.bookingId,
      gymId: clazz.gymId,
      classDate: clazz.dateStart,
    };
    this.service.bookClass(classInfo).subscribe((data: any) => {
      if (data.ok) {
        this.notificationService.showInfo('Aula Agendada com sucesso');
      } else {
        this.notificationService.showInfo(
          'Aula NÃO pode ser Agendada: ' + data.message
        );
      }
      this.notificationService.showInfo(data);
      this.loadData();
    });
  }

  cancelClass(clazz: any) {
    const classInfo = {
      cancelId: clazz.cancelId,
      gymId: clazz.gymId,
    };
    this.service.cancelClass(classInfo).subscribe((data: any) => {
      if (data.ok) {
        this.notificationService.showInfo('Aula cancelada com sucesso');
      } else {
        this.notificationService.showInfo(
          'Aula NÃO pode ser Cancelada: ' + data.message
        );
      }
      this.loadData();
    });
  }
}
