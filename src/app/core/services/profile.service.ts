import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { QuestionSelectService } from './question-select.service';
import { QuestionApiService } from './question-api.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

      nameValue :any ;
      sornameValue :any ;
      numberValue :any ;
      email:any ;
      //  protectednumber :any | undefined = 0 ;
      profession :any ;
      education_level  :any ;
      Telephone  :any ;
      Address :any ;
      Address_2 :any ;
      City :any ;
      State :any ;
      Postal_Code   :any ;
      web_sitesi :any ;
      twitter :any ;
      facebook :any ;
      linkedin :any ;
      youtube :any ;
      // imageUrl:any;
 
    constructor(private questionSelectService:QuestionSelectService,
      private http:HttpClient,
      private questionApiService:QuestionApiService) {

     }

  
    getprofile() {

        const user = JSON.parse(localStorage.getItem("user") || "{}");
    
         const username =user.email.replace("@" , "").replace("." , "")
    
        //  const account = {
        //   nameValue :    this.First_name , 
        //   sornameValue : this.Last_Name,
        //   numberValue :    this.number,
        //   email:username ,
        //   //  protectednumber :any | undefined = 0 ;
        //   profession : this.profession,
        //   education_level  : this.education_level ,
        //   Telephone  : this.Telephone ,
        //   Address :  this.Address,
        //   Address_2 :  this.Address_2,
        //   City :  this.City,
        //   State :  this.State,
        //   Postal_Code   :  this.Postal_Code ,
        //   web_sitesi :  this.web_sitesi,
        //   twitter :  this.twitter,
        //   facebook :  this.facebook,
        //   linkedin :  this.linkedin,
        //   youtube :  this.youtube
        //  }

        const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/updateData/" 
         + username ;

        //  this.questionApiService.updateData(account).subscribe((data:any ) => {
        //   const user = {
        //     isim:this.First_name,
        //     numara:this.number,
        //     soyisim:this.Last_Name
        //   }
    
        //   localStorage.setItem("userInformation2",JSON.stringify(user))
    
          this.http.get(`${url}.json`).subscribe((data : any) =>
          {
      
            

             this.nameValue=data.nameValue,
             this.sornameValue=data.sornameValue,
             
             this.numberValue=data.numberValue,
                this.email =data.email,
             this.profession = data.profession ,
             this.education_level =data.education_level,
              this.Telephone =data.Telephone ,
              this.Address =data.Address,
              this.Address_2 =data.Address_2 ,
             this.City = data.City
             
             this.State =  data.State,
            this.Postal_Code =  data.Postal_Code ,
              this.web_sitesi = data.web_sitesi,
              this.twitter= data.twitter,
              this.facebook = data.facebook,
             this.linkedin = data.linkedin ,
              this.youtube =data.youtube

          }
          )
        //  })  
        }  

  record(imageUrl?:any):any{
    if(imageUrl){
      localStorage.setItem("record",JSON.stringify(imageUrl))
      return 
    }
    const record = JSON.parse(localStorage.getItem("record") || "{}");
    return record
  }

}


