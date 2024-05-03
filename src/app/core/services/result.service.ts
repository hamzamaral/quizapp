import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {QuestionSelectService} from "./question-select.service";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {questions} from "../model/question";
import {result, Result2} from "../model/result";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private httpp:HttpClient,private QuestionSelectService:QuestionSelectService) { }
  getresult(auth?:string):Observable<result[] >{
    if (auth){
      this.QuestionSelectService.isimSoyisimNumara=auth
        }
    const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/" + this.QuestionSelectService.isimSoyisimNumara;
    return this.httpp.get(url + ".json").pipe(
      map((data: any) => {
        if (data) {
          const result: result[] = [];
      
          for (const key in data) {
            result.push({ ...data[key], id: key });
          }
          return result;
        } else {
          throw new Error("Veri bulunamadı."); 
        }
      })
    );


    
  }

}
