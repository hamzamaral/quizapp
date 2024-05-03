import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QuestionApiService} from "../../core/services/question-api.service";
import {filter, map} from "rxjs";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {QuestionSelectService} from "../../core/services/question-select.service";
import {ResultService} from "../../core/services/result.service";
import {EventService} from "../../core/services/event-service.service";
import { AuthService } from 'src/app/core/services/auth.service';


export interface result {
  soru: string;
  isim: string;
  soyisim: string;
  numara: string;
  dogruCevap: string;
  benimCevabim: string;
  category: string;
  difficulty: string;
  type: string;
  sonuc:string
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(private http: HttpClient,private changeDetectorRef: ChangeDetectorRef,
              private QuestionApiService:QuestionApiService,
              private QuestionSelectService:QuestionSelectService,private authService:AuthService,
              private  ResultService:ResultService,private eventService: EventService) {
    this.eventService.functionCallEvent.subscribe(() => {
      this.getresult();
    
    });
    this.getresult()
  


  }

  @ViewChild(MatTable, {static: false}) table: MatTable<any> | undefined;
  isConditionTrue:boolean=true

  resultTable:any[]=[];
  resultTabletoplam:any[]=[]
  // resultTablelist:any[]= []
  // resultTablelist: MatTableDataSource<any> | undefined;
  // productstoplamkey: any[] = [];//tüm verilerin kayıt edildiği yer

  resultTablelist: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist1: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist2: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist3: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist4: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist5: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist6: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist7: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist8: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist9: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist10: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelisttoplam: MatTableDataSource<any> = new MatTableDataSource<any>();
  resultTablelist1length:number = 0;
  resultTablelist2length= 0;
  resultTablelist3length = 0;
  resultTablelist4length = 0;
  resultTablelist5length = 0;
  resultTablelist6length = 0;
  resultTablelist7length = 0;
  resultTablelist8length = 0;
  resultTablelist9length = 0;
  resultTablelist10length = 0;



  displayedColumnsresult: string[] = ['Question', 'Name',
  'surname', 'Number','trueAnswer', 'myResponse',"category",
  "difficulty","type" ,"result","exam"];


  products1: any[] = [];
  productkeys: any[] = [];
  products2: any[] = [];
  products2key: any[] = [];
  productstoplam: any[] = [];



  ngOnInit(){
  
  }
 
  isCondition(){
    this.isConditionTrue=!this.isConditionTrue
  }

  getresult() {
    this.ResultService.getresult().subscribe(
      data => {
        let resultTablelist:any[]= [];
        // let resultTabletoplam:any[] ;
        this.resultTable=[]
        let resultTable1:any  =[]
        let resultTable2:any  =[]
        let resultTable3:any  =[]
        let resultTable4:any  =[]
        let resultTable5:any  =[]
        let resultTable6:any  =[]
        let resultTable7:any  =[]
        let resultTable8:any  =[]
        let resultTable9:any  =[]
        let resultTable10:any  =[]
        this.productkeys=[]
        resultTablelist  = data

        resultTablelist.forEach(item => {
          this.productkeys.push(item.id)
          
        });
        resultTablelist.forEach(item => {
         
          let resulitem =
            {Question:item["Soru"],Name:item["isim"],surname:item["soyisim"],Number:item["numara"],
            trueAnswer:item["dogruCevap"],myResponse:item["benimCevabim"],
            category:item["category"],
            difficulty:item["difficulty"],type:item["type"],result:item["sonuc"],exam:item["test"]}

             
               this.resultTable.push(resulitem)
               this.resultTabletoplam.push(resulitem)
        });

        resultTablelist.forEach((item, index) =>{
          if (item["test"]  ==1 ) {
            resultTable1.push(this.resultTable[index]);
            this.resultTablelist1.data = resultTable1;
            let lengh = resultTable1.length 
            let x = resultTable1.filter((result:any) => result["result"] =="true"  ).length 
            this.resultTablelist1length = Math.ceil(x * 100/lengh)
        }
        if (item["test"]  ==2 ) {
          resultTable2.push(this.resultTable[index]);
          this.resultTablelist2.data = resultTable2;
          let lengh = resultTable2.length 
          let x = resultTable2.filter((result:any) => result["result"] =="true"  ).length 
          this.resultTablelist2length = Math.ceil(x * 100/lengh)
      }
      if (item["test"]  ==3 ) {
        resultTable3.push(this.resultTable[index]);
        this.resultTablelist3.data = resultTable3;
        let lengh = resultTable3.length 
        let x = resultTable3.filter((result:any) => result["result"] =="true"  ).length 
        this.resultTablelist3length = Math.ceil(x * 100/lengh)
 
    }
    if (item["test"]  ==4 ) {
      resultTable4.push(this.resultTable[index]);
      this.resultTablelist4.data = resultTable4;
      let lengh = resultTable4.length 
      let x = resultTable4.filter((result:any) => result["result"] =="true"  ).length 
      this.resultTablelist4length = Math.ceil(x * 100/lengh)
  }

  if (item["test"]  ==5 ) {
    resultTable5.push(this.resultTable[index]);
    this.resultTablelist5.data = resultTable5;
    let lengh = resultTable5.length 
    let x = resultTable5.filter((result:any) => result["result"] =="true"  ).length 
    this.resultTablelist5length = Math.ceil(x * 100/lengh)
}
if (item["test"]  ==6 ) {
  resultTable6.push(this.resultTable[index]);
  this.resultTablelist6.data = resultTable6;
  let lengh = resultTable6.length 
  let x = resultTable6.filter((result:any) => result["result"] =="true"  ).length 
  this.resultTablelist6length = Math.ceil(x * 100/lengh)
}
if (item["test"]  ==7 ) {
  resultTable7.push(this.resultTable[index]);
  this.resultTablelist7.data = resultTable7;
  let lengh = resultTable7.length 
  let x = resultTable7.filter((result:any) => result["result"] =="true"  ).length 
  this.resultTablelist7length = Math.ceil(x * 100/lengh)
}
if (item["test"]  ==8 ) {
  resultTable8.push(this.resultTable[index]);
  this.resultTablelist8.data = resultTable8;
  let lengh = resultTable8.length 
  let x = resultTable8.filter((result:any) => result["result"] =="true"  ).length 
  this.resultTablelist8length = Math.ceil(x * 100/lengh)
}
if (item["test"]  ==9 ) {
  resultTable9.push(this.resultTable[index]);
  this.resultTablelist9.data = resultTable9;
  let lengh = resultTable9.length 
  let x = resultTable9.filter((result:any) => result["result"] =="true"  ).length 
  this.resultTablelist9length = Math.ceil(x * 100/lengh)
}
if (item["test"]  ==10 ) {
  resultTable10.push(this.resultTable[index]);
  this.resultTablelist10.data = resultTable10;
  let lengh = resultTable10.length 
  let x = resultTable10.filter((result:any) => result["result"] =="true"  ).length 
  this.resultTablelist10length = Math.ceil(x * 100/lengh)
}


     
        

        }

        )

       


        this.resultTablelist.data = this.resultTable;
        // this.resultTablelist1.data = resultTable2;
        // debugger
        resultTable1 = []
        resultTable2 = []
        resultTable3 = []
        resultTable4 = []
        resultTable5 = []
        resultTable6 = []
        resultTable7 = []
        resultTable8 = []
        resultTable9 = []
        resultTable10 = []
        
        this.resultTablelisttoplam.data= this.resultTabletoplam;
        localStorage.setItem("resultTablelist",JSON.stringify(this.resultTablelist.filteredData))
     


      },
      error => {
        console.error(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist.filter = filterValue.trim().toLowerCase();
  }
  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist1.filter = filterValue.trim().toLowerCase();
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist2.filter = filterValue.trim().toLowerCase();
  }
  applyFilter3(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist3.filter = filterValue.trim().toLowerCase();
  }
  applyFilter4(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist4.filter = filterValue.trim().toLowerCase();
  }
  applyFilter5(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist5.filter = filterValue.trim().toLowerCase();
  }
  applyFilter6(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist6.filter = filterValue.trim().toLowerCase();
  }
  applyFilter7(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist7.filter = filterValue.trim().toLowerCase();
  }
  applyFilter8(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist8.filter = filterValue.trim().toLowerCase();
  }
  applyFilter9(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist9.filter = filterValue.trim().toLowerCase();
  }
  applyFilter10(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.resultTablelist10.filter = filterValue.trim().toLowerCase();
  }

  

}
