import { Component } from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {AuthResponse} from "../../model/AuthResponse";
import {QuestionSelectService} from "../../services/question-select.service";
import {Router} from "@angular/router";
import {ResultService} from "../../services/result.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent {
  // loading:boolean = false;
  error: string = "";
  isim: string = "hamza";
  soyisim: string = "maral";
  numara: string = "1";

  constructor(private AuthService:AuthService,protected questionSelectService:QuestionSelectService
              ,private router: Router,private _formBuilder: FormBuilder,
              private QuestionSelectService:QuestionSelectService, private ResultService:ResultService) {
  }

  AuthControlGropups = this._formBuilder.group(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      name: new FormControl('',[Validators.required,Validators.minLength(5)]),
      sorname: new FormControl('',[Validators.required,Validators.minLength(5)]),
      number: new FormControl('',[Validators.required,Validators.minLength(5)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
    }
  )

    handleAuth(){


      if (this.questionSelectService.isLoginMode == false){
        const nameValue = this.AuthControlGropups.value.name;
        const sornameValue = this.AuthControlGropups.value.sorname;
        const numberValue = this.AuthControlGropups.value.number;
        const email = this.AuthControlGropups.value.email
        const password = this.AuthControlGropups.value.password

        if (nameValue !== null && nameValue !== undefined &&
          sornameValue !== null && sornameValue !== undefined &&
          numberValue !== null && numberValue !== undefined &&
          email !== null && email !== undefined &&
        password !== null && password !== undefined) {
          this.QuestionSelectService.isim = nameValue;
          this.QuestionSelectService.soyisim=sornameValue
          this.QuestionSelectService.numara=numberValue
          this.QuestionSelectService.isimSoyisimNumara=nameValue+sornameValue+numberValue
          this.AuthService.postAuthAccount(nameValue,sornameValue,numberValue,email,password)
        }

      }

  const email = this.AuthControlGropups.value.email
  const password = this.AuthControlGropups.value.password
  let response:Observable<any>

   if (this.questionSelectService.isLoginMode == true){
     response = this.AuthService.SigIn(email,password)

     if(email !== null && email !== undefined){
    this.AuthService.getAuthAccount(email).subscribe(data => {
      const values = Object.values(data);
            // @ts-ignore

      this.QuestionSelectService.isim=values[0].nameValue
      // @ts-ignore
      this.QuestionSelectService.soyisim=values[0].sornameValue
      // @ts-ignore
      this.QuestionSelectService.numara=values[0].numberValue
      // @ts-ignore
      this.QuestionSelectService.isimSoyisimNumara=values[0].nameValue + values[0].sornameValue + values[0].numberValue

      // @ts-ignore
      const userBilling =  {nameValue:values[0].nameValue,sornameValue:values[0].sornameValue,numberValue:values[0].numberValue}

      localStorage.setItem("userInformation",JSON.stringify(userBilling))


      })


     }
   }
   else{
     response = this.AuthService.SignUp(email,password)
   }

     return response.subscribe({
     next:(data => {
       this.error="",
         this.router.navigate(['/home'])

     }),
     error:(

       (err)=> {
         this.error=err,
         console.log(err)
       }
      )
    })

    }
  toggle(){
    this.questionSelectService.isLoginMode=!this.questionSelectService.isLoginMode
  }

}
