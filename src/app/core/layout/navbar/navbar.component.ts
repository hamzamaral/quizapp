import {Component, ViewChild} from '@angular/core';
import {ResultComponent} from "../../../features/result/result.component";
import {EventService} from "../../services/event-service.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {QuestionSelectService} from "../../services/question-select.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  // isAdmin: boolean = false;
  login:string="login"
  logout:string="logout"



  // @ViewChild(ResultComponent) resultComponent: ResultComponent | undefined;
  constructor(private eventService: EventService,private router: Router,private authService:AuthService
  ,private questionSelectService:QuestionSelectService) {
  }
  ngOnInit(): void {
    this.authService.user.subscribe(user=> {
      this.isAuthenticated = !!user;
      console.log(user)
      if(user){
      }

    })
  }

  public callresultComponentFunction() {
    // this.resultComponent?.getresult(); // ResultComponent'teki fonksiyonu çağırma
    this.eventService.functionCallEvent.emit();
    // this.eventService.functionCallEvent.emit();
    // this.router.navigate(['/Questionlist']);
  }

  logOut(){
    this.authService.logout()
  }
  
  isloginmod(log:string){
    if(log == "login") {
      this.questionSelectService.isLoginMode = true;
    }

    if(log == "logout") {
      this.questionSelectService.isLoginMode=false
    }
    // this.questionSelectService.isLoginMode=!this.questionSelectService.isLoginMode
  }
}
