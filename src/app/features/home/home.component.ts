import {ChangeDetectorRef, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QuestionSelectService} from "../../core/services/question-select.service";
import {QuestionApiService} from "../../core/services/question-api.service";
import {QuestionlistComponent} from "../questionlist/questionlist.component";
import {Router} from "@angular/router";
import { ChooseService } from 'src/app/core/services/choose.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  // implements selectquestionvariable
  questionsLength = 0 ;
  amount : string = "32";
  category : string = "9";
  difficultySelected : string = "medium";
  categoriesSelected : string = "General Knowledge";
  difficultyList :  any[] = ["easy","medium","hard"];
  // responseData: any[] = [];
  // responseData2: any[] = [];
  // responseData3: any[] = [];
  // any[] = ["easy","medium","hard"];
  // responseData: any[] = [];
  toggle:boolean=false;
  categories:string[] = [
    "Entertainment: Cartoon & Animations",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Comics",
    "Vehicles",
    "History",
    "Geography",
    "Sports",
    "Science: Computers",
    "Science & Nature",
    "Entertainment: Video Games",
    "Entertainment: Television",
    "Entertainment: Music",
    "Entertainment: Film",
    "Entertainment: Books",
    "General Knowledge"
  ];





  constructor(private httpp: HttpClient, private QuestionSelectService:QuestionSelectService,
              private QuestionApiService:QuestionApiService,private cdRef: ChangeDetectorRef,private router: Router,
              private chooseService:ChooseService) {}


  get(){
    this.QuestionSelectService.amount=this.amount
    this.QuestionSelectService.difficultySelected=this.difficultySelected
    this.QuestionSelectService.category=this.category
    this.QuestionApiService.getQuestions(this.amount,this.category,this.difficultySelected).subscribe(
      (questions) => {
        // this.responseData = questions[results];
        this.QuestionSelectService.responseData=questions
        this.QuestionSelectService.responseDataShuffleArray=questions
        this.QuestionApiService.questionsLength =  questions.length// questionsLength değer verme

       

        this.QuestionSelectService.responseDataShuffleArray.forEach((number) => {
          this.QuestionApiService.shuffleOptions(number)

        });
        this.chooseService.gettest()
        this.router.navigate(['/Questionlist']);

      },
      (error: any) => {
        console.log('Hata:', error);
      }
    )

    // this.QuestionlistComponent.servis()


    // this.ServisServicess.updateapi()
    //
    // this.updateData(this.amount,this.category,this.difficulty)
    // this.ServisServicess.getData()
    // this.toggle=!this.toggle
  }

  finishTheExam(){
    // this.ToggleService.updateDatatoggleexam()
    // this.toggle=!this.toggle
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit hook is calledoyes');
  }

  ngAfterContentChecked(): void {
  }
  ngOnDestroy() {
    console.log('Bileşen yok edildi.');
  }

  onCategorySelect(event: any) {
    const selectedCategory = event.value;


    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[0] == selectedCategory){
        this.category="32"
      }
      if (this.categories[1] == selectedCategory){
        this.category="31"
      }
      if (this.categories[2] == selectedCategory){
        this.category="29"
      }
      if (this.categories[3] == selectedCategory){
        this.category="28"
      }
      if (this.categories[4] == selectedCategory){
        this.category="23"
      }
      if (this.categories[5] == selectedCategory){
        this.category="22"
      }
      if (this.categories[6] == selectedCategory){
        this.category="21"
      }
      if (this.categories[7] == selectedCategory){
        this.category="18"
      }
      if (this.categories[8] == selectedCategory){
        this.category="17"
      }
      if (this.categories[9] == selectedCategory){
        this.category="15"
      }
      if (this.categories[10] == selectedCategory){
        this.category="14"
      }
      if (this.categories[11] == selectedCategory){
        this.category="12"
      }
      if (this.categories[12] == selectedCategory){
        this.category="11"
      }
      if (this.categories[13] == selectedCategory){
        this.category="10"
      }
      if (this.categories[14] == selectedCategory){
        this.category="9"
      }

    }

  }



}
