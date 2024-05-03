import { Component } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';
import { QuestionSelectService } from 'src/app/core/services/question-select.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // selectedComponent:number ; 
  constructor(private questionSelectService:QuestionSelectService,
    private profileService:ProfileService){
      setTimeout(() => {
        console.log("setTimeout")
        this.showComponent(1);
        if(this.profileService.record()){
          this.imageUrl=this.profileService.record()
        }
        
      }, 300); 
      setTimeout(() => {
        this.showComponent(1);
        
      }, 500); 

  }
  // e.name?"Giriş yap":"hesap Oluştur"
  First_name =  this.profileService.nameValue
  Last_Name =  this.profileService.sornameValue
  number =    this.questionSelectService.numara
  imageUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  selectedComponent: number | null | undefined = 1;

  showComponent(componentNumber?: number) {
    this.selectedComponent = componentNumber;
    this.First_name =     this.profileService.nameValue
    this.Last_Name =  this.profileService.sornameValue
    this.number =    this.questionSelectService.numara
  }


}
