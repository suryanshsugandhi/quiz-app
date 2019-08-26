import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service'


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  selected = null;
  questions = [];
  orderedQuestions = [];
  currentQuestion = null;
  constructor(private __questionService: QuestionService) { }

  ngOnInit() {
    this.fetchQuestions();
  }
  selectOption(selection){
    this.selected = selection;
  }

  submit(){
    if(this.selected == null){
      document.getElementById('none-selected').style.visibility = 'visible';
      document.getElementById('none-selected').style.opacity = '1';
    }
    else{
      console.log('Next question')
    }
  }

  fetchQuestions() :void {
    this.__questionService.fetchQuestions()
      .subscribe((question)=>{
        this.questions.push(question);
      });    
  }
}
