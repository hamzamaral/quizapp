import { Component } from '@angular/core';
import {QuestionSelectService} from "../../core/services/question-select.service";
import {ResultService} from "../../core/services/result.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isim: string = "hamza";
  soyisim: string = "maral";
  numara: string = "1";
  constructor(private QuestionSelectService:QuestionSelectService,private ResultService:ResultService,private router: Router) {
  }

  submitForm() {
    this.QuestionSelectService.isim=this.isim
    this.QuestionSelectService.soyisim=this.soyisim
    this.QuestionSelectService.numara=this.numara
    this.QuestionSelectService.isimSoyisimNumara=this.isim+this.soyisim+this.numara

    this.router.navigate(['/home'])
  }

}
