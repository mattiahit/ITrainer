import { Component } from '@angular/core';
import { Question } from './shared/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ITrainer';

  questionToShow: Question;

  onCategoryClicked(technologyQuestion: Question){
    //console.log(technologyQuestion.questionText);
    this.questionToShow = technologyQuestion;
  }

}
