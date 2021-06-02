import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  filterTerm: string="";
  documents: any = [];
  documentsAll: any = [];
  selectedCategory: string="All";
  categories: any = ["All","Financial","Technical","Marketing","Human Resources"];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    // Get list of documnets
    this.getDocumnetList();  
  }

  getDocumnetList = () => {
    this.commonService.getDocumentList().then(
      (res:any) => {
        this.documents = res;
        this.documentsAll = res;
      }
    );
  }

  filterDocuments = (value:string) => {
    this.selectedCategory = value;
    if(value != "All"){
      this.documents = this.documentsAll.filter((m: any) => {
        return m.category === value;
      });      
    }else{
      this.documents = this.documentsAll;
    }
  }
}
