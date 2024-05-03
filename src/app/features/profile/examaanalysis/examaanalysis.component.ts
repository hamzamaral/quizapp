import { Component } from '@angular/core';

@Component({
  selector: 'app-examaanalysis',
  templateUrl: './examaanalysis.component.html',
  styleUrls: ['./examaanalysis.component.css']
})
export class ExamaanalysisComponent {
  dosyaSec(event: any) {
    const secilenDosya = event.target.files[0]; // Seçilen dosya
    if (secilenDosya) {
      console.log("Seçilen dosya: ", secilenDosya);
      // Burada dosya ile yapmak istediğiniz işlemi gerçekleştirebilirsiniz.
    }
  }
}
