import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { interval, take, timer } from 'rxjs';
//
@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatRadioModule,
    FormsModule,
    NgIf,
    MatSliderModule,
    MatProgressSpinnerModule,
  ],

})
export class DenemeComponent {

remainingTime: number = 60 * 30; // Sınav süresi dakika cinsinden (örneğin, 30 dakika)

constructor() {}

ngOnInit() {
  const timer$ = interval(1000); // Her 1 saniyede bir güncelleme yap

  timer$.subscribe(() => {
    if (this.remainingTime > 0) {
      this.remainingTime--;
    }
  });
}
}

