import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class GymService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(API + 'gyms/list').pipe(map((data: any) => data.gyms));
  }
}
