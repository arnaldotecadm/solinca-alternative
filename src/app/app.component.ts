import { Component } from '@angular/core';
import { LoadingService } from './loading-service.ts/loading-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'solinca-alternative';

  constructor(public loadingService: LoadingService) {}
}
