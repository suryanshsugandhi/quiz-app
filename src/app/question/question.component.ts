import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  selected = null;
  constructor() { }

  ngOnInit() {
  }
  selectOption(selection){
    this.selected = selection;
  }

  submit(){
    if(this.selected == null){
      document.getElementById('none-selected').classList.remove('hidden');
    }
    else{
      console.log('Next question')
    }
  }
}
