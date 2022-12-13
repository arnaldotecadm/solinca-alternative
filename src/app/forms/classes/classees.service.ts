import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
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
}
