import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewChecked, Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ProfileService } from 'src/app/core/services/profile.service';
import { QuestionApiService } from 'src/app/core/services/question-api.service';
import { QuestionSelectService } from 'src/app/core/services/question-select.service';
import { ResultService } from 'src/app/core/services/result.service';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent  {
  constructor(private questionSelectService:QuestionSelectService,
    private http:HttpClient,
    private questionApiService:QuestionApiService,
    private profileService:ProfileService,
   

    ){
      this.profileService.getprofile();

    
      setTimeout(() => {
        this.record();
        this.initializeComponent();
      }, 200); 
    
  }



  
  initializeComponent() {
      
      this.First_name =    this.profileService.nameValue ||this.questionSelectService.isim; 
      this.Last_Name = this.profileService.sornameValue || this.questionSelectService.soyisim ;
      this.number =    this.profileService.numberValue  || ""  ;
  //  protectednumber :any | undefined = 0 ;
  this.profession = this.profileService.profession || "" ;
  this.education_level  = this.profileService.education_level || "" ;
  this.Telephone  = this.profileService.Telephone || "" ;
  this.Address = this.profileService.Address || "" ;
  this.Address_2 = this.profileService.Address_2 || "" ;
  this.City = this.profileService.City || "" ;
  this.State = this.profileService.State || "" ; 
  this.Postal_Code   =this.profileService.Postal_Code || "" ;
  this.web_sitesi = this.profileService.web_sitesi || "" ;
  this.twitter = this.profileService.twitter || "" ;
  this.facebook = this.profileService.facebook || "" ;
  this.linkedin = this.profileService.linkedin || "" ;
  this.youtube = this.profileService.youtube || "" ;

  }
  



  ilkAnahtar = "";
   First_name =    this.profileService.nameValue ||this.questionSelectService.isim ; 
   Last_Name = this.profileService.sornameValue || this.questionSelectService.soyisim ;
   number =    this.profileService.numberValue  || ""  ;
   profession = this.profileService.profession || "" ;
   education_level  = this.profileService.education_level || "" ;
   Telephone  = this.profileService.Telephone || "" ;
   Address = this.profileService.Address || "" ;
   Address_2 = this.profileService.Address_2 || "" ;
   City = this.profileService.City || "" ;
   State = this.profileService.State || "" ; 
   Postal_Code   =this.profileService.Postal_Code || "" ;
   web_sitesi = this.profileService.web_sitesi || "" ;
   twitter = this.profileService.twitter || "" ;
   facebook = this.profileService.facebook || "" ;
   linkedin = this.profileService.linkedin || "" ;
   youtube = this.profileService.youtube || "" ;


  record(){
    const user = JSON.parse(localStorage.getItem("user") || "{}");

     const username =user.email.replace("@" , "").replace("." , "")
 
     const account = {
      nameValue :    this.First_name , 
      sornameValue : this.Last_Name,
      numberValue :    this.number,
      email:username ,
      profession : this.profession,
      education_level  : this.education_level ,
      Telephone  : this.Telephone ,
      Address :  this.Address,
      Address_2 :  this.Address_2,
      City :  this.City,
      State :  this.State,
      Postal_Code   :  this.Postal_Code ,
      web_sitesi :  this.web_sitesi,
      twitter :  this.twitter,
      facebook :  this.facebook,
      linkedin :  this.linkedin,
      youtube :  this.youtube
     }
    
     this.questionApiService.updateData(account).subscribe((data:any ) => {
      const user = {
        isim:this.First_name,
        numara:this.number,
        soyisim:this.Last_Name
      }
      this.profileService.getprofile();
 
     })    
  }
  recordTable(){
  

    const user = JSON.parse(localStorage.getItem("user") || "{}");

     const username =user.email.replace("@" , "").replace("." , "")
 
     const account = {
      nameValue :    this.First_name , 
      sornameValue : this.Last_Name,
      numberValue :    this.number,
      email:username ,
      profession : this.profession,
      education_level  : this.education_level ,
      Telephone  : this.Telephone ,
      Address :  this.Address,
      Address_2 :  this.Address_2,
      City :  this.City,
      State :  this.State,
      Postal_Code   :  this.Postal_Code ,
      web_sitesi :  this.web_sitesi,
      twitter :  this.twitter,
      facebook :  this.facebook,
      linkedin :  this.linkedin,
      youtube :  this.youtube
     }
    
     this.questionApiService.updateData(account).subscribe((data:any ) => {
      const user = {
        isim:this.First_name,
        numara:this.number,
        soyisim:this.Last_Name
      }
      this.profileService.getprofile();
      setTimeout(() => {
        location.reload();

      }, 300); 
      
     })    

  }


}
