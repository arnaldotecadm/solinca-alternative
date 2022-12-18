import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(private http: HttpClient) {}

  getAllUpcomingClassesForUser(gymId: number) {
    return this.http
      .get(API + 'classes/upcoming/?gymId=' + gymId)
      .pipe(map((data: any) => data.classes));
  }

  getAllBookedClasses() {
    return this.http
      .get(API + 'classes/booked')
      .pipe(map((data: any) => data.bookedClasses));
  }

  getHistory() {
    return this.http
      .get(API + 'classes/history?dateStart=2022-01-01&dateEnd=2023-12-31')
      .pipe(map((data: any) => data.historyClasses));
  }

  bookClass(clazz: any) {
    return this.http.post(API + 'classes/book', clazz);
  }

  cancelClass(clazz: any) {
    return this.http.post(API + 'classes/cancel', clazz);
  }
}
