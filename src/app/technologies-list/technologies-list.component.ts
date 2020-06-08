import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import DataJson from '../../assets/questions.json';
import { plainToClass } from 'class-transformer';
import { Question } from '../shared/question.model';
import { TechnologyType } from '../shared/technology-type.enum';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.scss']
})
export class TechnologiesListComponent implements OnInit {

  @Output()
  categoryClicked = new EventEmitter<Question>();
  questions = [];
  categories = [];
  
  constructor() { 
    this.questions = plainToClass(Question, DataJson);
    for(let category in TechnologyType)
      if(parseInt(category, 10) >= 0)
        this.categories.push(TechnologyType[category]);
  }

  ngOnInit(): void {
  }

  onCategoryClicked(clickedCategory: string){
    var filteredQuestions = this.questions.filter(
      question => question.technologyType === clickedCategory
    )
    if(filteredQuestions.length > 0){
      var i = Math.floor(Math.random()*filteredQuestions.length)+0;
      this.categoryClicked.emit(filteredQuestions[i]);
    }
    
  }


}
