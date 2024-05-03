import { Injectable } from '@angular/core';
import {QuestionSelectService} from "./question-select.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {questions} from "../model/question";
import { result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService {
  
  responseData: any[] = [];
  questionsLength = 0 ;



  constructor(private QuestionSelectService:QuestionSelectService,private httpp:HttpClient) { }
   key = "key" ;

  getQuestions(getamount:string,getcategory:string,getdifficulty:string):Observable<questions[]>{

    const apiUrl= 'key' +
      getamount +
      '&category=' +
      getcategory +
      '&difficulty=' +
      getdifficulty;
    return this.httpp.get<{ results: questions[] }>(apiUrl).pipe(
      map(
        (data) => data.results
      )
      
    );
    //   .pipe(
    //   tap((responseData: questions[]) => {
    //     console.log(typeof(responseData));
    //     console.log(responseData);
    //   }),
    //   catchError((error: any) => {
    //     console.log('Hata:', error);
    //     return throwError(error);
    //   })
    // );

  }



  updateData(newData: any): Observable<any> {

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const username =user.email.replace("@" , "").replace("." , "")
    // const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/account/" + username;

    const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/updateData/" 
    + username ;
    const    key = "key" ;

    return this.httpp.put(`${url}.json`, newData);//Last_Name
  }


  shuffleOptions(response:any) {
    // bu fonksiyon doğru cevap sıklarının  yerini değiştirmek için kullanıyorum
    const options =[...response.incorrect_answers, response.correct_answer]
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    this.responseData.push(options)
    this.QuestionSelectService.responseDataShuffle=this.responseData
    if(this.QuestionSelectService.responseDataShuffleArray[this.QuestionSelectService.responseDataShuffleArray.length - 1] == response){

      this.responseData = []
    }

  }

}
