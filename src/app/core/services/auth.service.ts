import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthResponse} from "../model/AuthResponse";
import {User} from "../model/Users";
import {BehaviorSubject, catchError, map, Observable, tap, throwError} from "rxjs";
import {FormControl, ɵElement, ɵValue} from "@angular/forms";
import {result} from "../model/result";
import { QuestionSelectService } from './question-select.service';
import {ResultService} from "./result.service";
import { QuestionApiService } from './question-api.service';
import { ChooseService } from './choose.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  // test = 0 ; //sonradan değiştirilebilir
   


  constructor(private http:HttpClient
    ,private questionSelectService:QuestionSelectService
    ,private ResultService:ResultService
    ,private chooseService:ChooseService) {


  }
  sigInUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=key"
  sigUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=key"

  SigIn(email: string | null | undefined, password: string | null | undefined){
    let veri:any = {
      isim: this.questionSelectService.isim,
      soyisim: this.questionSelectService.soyisim,
      numara: this.questionSelectService.numara
     }   
     

    localStorage.setItem("userInformation",JSON.stringify(veri))
    const user2 = JSON.parse(localStorage.getItem("userInformation") || "{}");

    
    return this.http.post<AuthResponse>(this.sigInUrl,
      {
        email: email,
        password: password,
        returnSecureToken:true

      }
      ).pipe(
      tap(
        responize=>{
 
          this.UserHandle(responize.email,responize.localId,responize.idToken,responize.expiresIn)
        }
      ),
      catchError(this.handleerror)
    )
  }

  SignUp(email: string | null | undefined,password: string | null | undefined){
   return this.http.post<AuthResponse>(this.sigUpUrl,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        tap(
          responize=>{
            this.UserHandle(responize.email,responize.localId,responize.idToken,responize.expiresIn)
          }
        ),
        catchError(this.handleerror)

    )
  }

  logout(){
    
    this.user.next(null);
    localStorage.removeItem("userInformation");
    localStorage.removeItem("user");

  }
   


  autologin(){
    if(localStorage.getItem("user") == null){
      return;
      


    }



    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const loadUser = new User(user.email, user.id,user._token, new Date(user._tokenExpirationDate));


    if(loadUser['_token']){
      this.user.next(loadUser);

    }


  }

  private  UserHandle(email:string,localId:string,idToken:string,expiresIn:string){
      const  expirationDate = new Date( new Date().getDate() + (+expiresIn*1000))
    const user = new User(
      email,
      localId,
      idToken,
      expirationDate
    );

    this.user.next(user);

    localStorage.setItem("user",JSON.stringify(user))
  }

  private handleerror(err:HttpErrorResponse) {
    let message = "hata oluştu";

    if (err.error.error) 
    {
      switch (err.error.error.message) {
        case "EMAIL_EXISTS":
          message = "bu mail adresi zaten kullanılıyor."
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "bir süre bekleyip tekrar deneyiniz."
          break;
        case "EMAIL_NOT_FOUND":
          message = "email adresi bulunamadı";
          break;
        case "INVALID_PASSWORD":
          message = "hatalı parola";
          break;
      }
    }
    return throwError(()=>  message);
  }

  postAuthAccount(nameValue:string,sornameValue:string,numberValue:string,email:string,password:string)
  {
    const username = email.replace("@" , "").replace("." , "")

    const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/account/" + username;
    const account = {nameValue:nameValue,sornameValue:sornameValue,numberValue:numberValue,email:email,password:password,test: 1 }
    localStorage.setItem("userInformation",JSON.stringify(account))
    this.http.post(url + ".json",account).subscribe(data=> console.log(data))
    const url2 = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/account/" 
    + username  + "/test" ;
     const test = 1;
    this.http.put(`${url2}.json`,test).subscribe((data)=>{


    })
    let imageUrl="https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette.png"
    localStorage.setItem("record",JSON.stringify(imageUrl))


    // this.chooseService.posttest(1)

  }

  getAuthAccount(email:string):Observable<any>
  {
    const username = email.replace("@" , "").replace("." , "")
    const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/account/" + username;


    return this.http.get(url + ".json")
  }





}






















  ////// /////// // // Veriyi güncellemek veya değiştirmek için HTTP PUT isteği
  //  updateData(key: string, newData: any): Observable<any> {
  /////////// /////// // / /////// /////// /////// // }

  //  Alternatif olarak HTTP PATCH isteği de kullanabilirsiniz
  //   patchData(key: string, updatedFields: any): Observable<any> {
  //    return this.http.patch(`${this.firebaseUrl}/${key}.json`, updatedFields);
  //  }


  //  Veriyi güncellemek veya değiştirmek için HTTP PUT isteği
  //   return this.http.put(`${this.firebaseUrl}/${key}.json`, newData);
  //  }






