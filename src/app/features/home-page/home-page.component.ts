import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventService } from 'src/app/core/services/event-service.service';
import { QuestionSelectService } from 'src/app/core/services/question-select.service';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
   isim:string = " ";
   soyisim:string = " " ;

  constructor(private AuthService:AuthService,protected questionSelectService:QuestionSelectService
    ,private router: Router,
    private QuestionSelectService:QuestionSelectService, 
    private ResultService:ResultService,private EventService:EventService)

     {
      
      const user2 = JSON.parse(localStorage.getItem("userInformation") || "{}");
      this.isim=user2.isim;
      this.soyisim=user2.soyisim;
      
     }

     start(){
      this.router.navigate(['/home']);
    }


}
