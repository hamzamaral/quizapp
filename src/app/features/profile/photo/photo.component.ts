import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { ChooseService } from 'src/app/core/services/choose.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { QuestionSelectService } from 'src/app/core/services/question-select.service';
import { ResultService } from 'src/app/core/services/result.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  constructor(private http:HttpClient
    ,private questionSelectService:QuestionSelectService
    ,private ResultService:ResultService
    ,private chooseService:ChooseService,
    private profileService:ProfileService) {


  }
  imageUrl: string | ArrayBuffer | null |undefined = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  ;
  public imagename:string | null |undefined = "" ;

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
    
      reader.onload = (e) => {
        this.imagename=file.name;

        // {{e.name?"Giriş yap":"hesap Oluştur"}}

        this.imageUrl = reader.result as string;

      };
      reader.readAsDataURL(file);

    }

  }
  
  record(){
    
    
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      
  
      const username =user.email.replace("@" , "").replace("." , "")
      const url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/foto/" 
           + username + "/foto";
          //  + "/test"
          let imageUrl = { "url" : this.imageUrl}
          this.profileService.record(this.imageUrl)
        

          // // this.QuestionSelectService.test= test     
            this.http.put(`${url}.json`,imageUrl).subscribe( 
               (data: any) => {
              window.location.reload();
            },
            (error: any) => {
              // Hata durumunda işlemleri burada yapın
              console.error('HTTP isteği sırasında hata oluştu:', error);
            });
  
  }
}
