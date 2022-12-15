import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ModalityService {
  constructor(private http: HttpClient) {}

  getAllModalities() {
    return this.http.get(API + 'classes/modalities').pipe(map((data: any) => data.modalities));
  }
}
