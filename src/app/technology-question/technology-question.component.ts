import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Question } from '../shared/question.model';

@Component({
  selector: 'app-technology-question',
  templateUrl: './technology-question.component.html',
  styleUrls: ['./technology-question.component.scss']
})
export class TechnologyQuestionComponent implements OnInit, OnChanges {

  @Input()
  questionToShow: Question;
  questionText: string = "";

  constructor() { }

  ngOnChanges():void {
    if(this.questionToShow)
      this.questionText = this.questionToShow.questionText;
    else this.questionText = "Kliknij w kategorię i wylosuj pytanie"
  }

  ngOnInit(): void {
  }

}
