import {Component, OnInit} from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import { QuestionSelectService } from './core/services/question-select.service';
import { AppModule } from './app.module';
import { ChooseService } from './core/services/choose.service';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myquiz';
 
  constructor(private authService:AuthService,private questionSelectService:QuestionSelectService,
    private chooseService:ChooseService
     ) {

      const user = JSON.parse(localStorage.getItem("userInformation") || "{}");
      this.questionSelectService.isim   =   user ? user.nameValue : "";
      this.questionSelectService.soyisim  =  user ? user.sornameValue : "";
      this.questionSelectService.numara =     user ? user.numberValue : "";
      this.questionSelectService.isimSoyisimNumara = user.nameValue + user.sornameValue + user.numberValue ;
      


      if(user)
      {
        const delayTime = 2 * 1000;

        timer(delayTime)
          .pipe(take(1)) 
          .subscribe(() => {
            this.chooseService.gettest();
           
            
          });
      }



  }

  ngOnInit(): void {
    this.authService.autologin();
  }
}
