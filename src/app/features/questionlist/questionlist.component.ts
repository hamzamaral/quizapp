import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ɵValue } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import {QuestionSelectService} from "../../core/services/question-select.service";
import {ChooseService} from "../../core/services/choose.service";
import {QuestionApiService} from "../../core/services/question-api.service";
import {Router} from "@angular/router";

import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent {

  minute = new BehaviorSubject<number>(0);
  second = new BehaviorSubject<number>(0);
  minutes: number = 0 ;
  seconds:number = 0;

  private timeoutId: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;
  questionNumber : any = 0
  isCardVisible : boolean =  false
  amount : string = "32"
  category : string = "9";
  difficultySelected : string = "easy";//medium,""hard""
  responseData: any[] = [];
  responseDataChoosing: any[] = [];
  // responseData3: any[] = [];
  choosingstring = ["A","B","C","D"];
  isim :string = "hamza"
  soyisim :string = "maral"
  numara :string="1";
  isimSoyisimNumara:string= this.isim+this.soyisim+this.numara;
  sonuc:string = "true"

  test:number = 0 ;
  conditionchoose: any[][] = Array.from({ length: 45 }, () =>
    Array.from({ length: 4 }, () =>
      Array.from({ length: 4 }, () => false)
    )
  );
  disablechoose: any[][] = Array.from({ length: 45 }, () =>
    Array.from({ length: 4 }, () =>
      Array.from({ length: 4 }, () => false)
    )
  );

  public selectedButtons: boolean[] = [];

  ngOnInit() {
    this.selectedButtons = Array(this.responseData.length).fill(false);
  }


  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  conditionchoosing: any[] = [0,1,2,3];  // İkinci koşul



  ngAfterViewChecked() {
        this.amount=this.QuestionSelectService.amount
        this.category=this.QuestionSelectService.category
        this.difficultySelected=this.QuestionSelectService.difficultySelected
        this.responseData=this.QuestionSelectService.responseData

        this.responseDataChoosing=this.QuestionSelectService.responseDataShuffle
        this.cdRef.detectChanges()
  }
  constructor(
    private httpp: HttpClient ,private QuestionApiService:QuestionApiService,
              private  QuestionSelectService:QuestionSelectService
          ,private cdRef: ChangeDetectorRef,private ChooseService:ChooseService,
              private _snackBar: MatSnackBar,public dialog: MatDialog,
              private router: Router
              )

  {
    this.minutes = (this.QuestionApiService.questionsLength * 2 )

    setTimeout(() => {
      this.questionlist(0);
    }, 100); 


    const now = moment();

const year = now.year();
const month = now.month() + 1; // Ay indeksi 0'dan başlar
const day = now.date();
const hours = now.hours();

///
this.exaampletime();
this.triggerFunction();
    
  }
 

  ngAfterViewInit(): void {
  }

  exaampletime(){
  
    setInterval(() => {

      this.seconds--
      if(this.seconds <= 0){
        if (this.seconds  <= 0 ){
        
          if(this.minutes <= 0){
           this.minutes = 60
          }
          this.minutes--
       }
        this.seconds = 60
  
      }
         

    }, 1000);
   
  }

  triggerFunction() {
    
    const initialDelay = 0; // 1 saniye
    const repeatCount = (this.QuestionApiService.questionsLength *100);
    let repeatCount2 = (this.QuestionApiService.questionsLength * 2) ;


    const interval = ((2000 /100 ) * 60 ) ; // 2 saniye(100/(2 * repeatCount)
   
    const subscription = timer(initialDelay, interval).pipe(
      take(repeatCount)
    ).subscribe(() => {
        this.value = this.value + (100/repeatCount) 
        const now = moment();

        const year = now.year();
        const month = now.month() + 1; 
        const day = now.date();
        const hours = now.hours();
        const minutes = now.minutes();
        const seconds = now.seconds();
        
        
    });
  }

  myFunction(){
    
  }

  cancelTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null; 
    }
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        SoruSayisi: this.QuestionSelectService.responseData.length, cozulenSoruSayisi: this.QuestionSelectService.NumberOfSolvedQuestions,
        BosSoruSayisi:this.QuestionSelectService.responseData.length - this.QuestionSelectService.NumberOfSolvedQuestions
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    
    });
  }


    Servis()
    {

      this.amount=this.QuestionSelectService.amount
      this.category=this.QuestionSelectService.category
      this.difficultySelected=this.QuestionSelectService.difficultySelected
      this.responseData=this.QuestionSelectService.responseData
      this.responseDataChoosing=this.QuestionSelectService.responseDataShuffle

    }

  Finish(){
    if((this.QuestionSelectService.responseData.length - this.QuestionSelectService.NumberOfSolvedQuestions) == 0 ){
      this.router.navigate(['/Result']);
      this.QuestionSelectService.NumberOfSolvedQuestions = 0
    }
    else{
      this.openDialog()
    }
    
   
  }

  openSnackBar(){

  }

  choosing(correct_answer:string,option:string,choice:string,i:number,
           category:string,type:string,difficulty:string,j:number,m:number){
    this.QuestionSelectService.NumberOfSolvedQuestions++ //bu iafde sınav bittiğinde sıfırlanması lazım
    this.conditionchoose[i][j][m] = true
    for(let j = 0; j<4; j++){
      this.disablechoose[i][j][0] = true
    }    
    this.selectedButtons[i] = !this.selectedButtons[i];
 
    this.ChooseService.gettest()
   



    this.ChooseService.choosing(correct_answer,option,choice,i,
      category,type,difficulty,this.QuestionSelectService.test)
  }
  questionlist(i:any) {
    this.questionNumber = i;
    this.isCardVisible = true;




  }
  questionlistprevious(){
    
    if( this.questionNumber > 0 )
    {
      this.questionNumber = this.questionNumber - 1;
    }

   

  }

  questionlistnext(){
    if((this.responseData.length )  > (this.questionNumber +1))
    {
    this.questionNumber = this.questionNumber + 1;
 
    }
    

  }


}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./dialog-content-example-dialog.css'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})

export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ,private router: Router,private questionSelectService:QuestionSelectService,
    private ChooseService:ChooseService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  finishexam(){
   
    this.questionSelectService.NumberOfSolvedQuestions = 0
    this.questionSelectService.test =  this.questionSelectService.test + 1 
    
    this.ChooseService.posttest(this.questionSelectService.test)
     this.router.navigate(['/Result']);
  }


}


