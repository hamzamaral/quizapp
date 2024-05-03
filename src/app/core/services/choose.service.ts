import { Injectable } from '@angular/core';
import {QuestionSelectService} from "./question-select.service";
import {HttpClient} from "@angular/common/http";
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChooseService {

  constructor(private  QuestionSelectService:QuestionSelectService,private httpp:HttpClient) { }
   gettestt :any = 1;


  gettest(){
    const user = JSON.parse(localStorage.getItem("user") || "{}");


    const username =user.email.replace("@" , "").replace("." , "")
    const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/account/" 
         + username  + "/test" ;

           this.httpp.get(`${url}.json`).subscribe((data :any)=>{
            this.QuestionSelectService.test = data ;
   
            
           })
        
  }

  posttest(test:number){
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const username =user.email.replace("@" , "").replace("." , "")
    const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/account/" 
         + username + "/test";
        let testt: number = test

    
          this.httpp.put(`${url}.json`,testt).subscribe((data : any) =>
          {
            

             for (const key in data) {     
                  
            
            }
          })
          // debugger;
  }


  choosing(correct_answer:string,option:string,choice:string,i:number,
    category:string,type:string,difficulty:string,test:any){
      this.QuestionSelectService.test

    let sonuc = ""
    this.QuestionSelectService.isimSoyisimNumara = this.QuestionSelectService.isim+this.QuestionSelectService.soyisim+this.QuestionSelectService.numara
    if (option==correct_answer){
      sonuc="true"
    }
    if (!(option==correct_answer)){
      sonuc="false"
    }
    let answers = {"isim":this.QuestionSelectService.isim,"soyisim":this.QuestionSelectService.soyisim,"numara":this.QuestionSelectService.numara,
      "Soru":i+1,"dogruCevap":correct_answer,"benimCevabim":option
      ,"category":category,"type":type,"difficulty":difficulty,"sonuc":sonuc,"test":test }
    this.httpp.post("https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/" +this.QuestionSelectService.isimSoyisimNumara + ".json",answers ).subscribe(data => console.log(data));
  }
}
