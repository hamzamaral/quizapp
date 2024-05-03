import { Injectable } from '@angular/core';
import {QuestionApiService} from "./question-api.service";
import {FormControl, ɵElement, ɵValue} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class QuestionSelectService {
  //secilen soruların amonunt categori ve difficultySelected gibi  compenetlerde ortak kullanıcak değerler bu servisden yonetilir
  isLoginMode:boolean=true
  data: string = '';
  amount : string = "32"
  category : string = "9";
  difficultySelected : string = "easy";//medium,""hard""
  responseData: any[] = [];
  responseDataShuffle: any[] = [];
  responseDataShuffleArray: any[] = [];
  choosingstring = ["A","B","C","D"];
  isim :string  = "hamza"
  soyisim :string  = "maral"
  numara :string = "1";
  isimSoyisimNumara:string= this.isim+this.soyisim+this.numara;
  toggleexam: boolean=true;
  sonuc:string = "true"
  NumberOfSolvedQuestions:number = 0
  test:number=1
  



  constructor() { }

}
