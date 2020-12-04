import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }
  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;
  answer = null;
  selectedOption = '';
  grade = () => { this.grading = true; };
  selectChoice = (choice) => {
    this.selectedOption = choice; }
  getcustomCss1 = (selectedChoice, currentChoice, answer, correct) => {
    if (this.grading === true) {
      if (selectedChoice === currentChoice){
        if (answer !== null){
          if (answer === correct){
            return 'list-group-item-success';
          }
          if (answer !== correct){
            return 'list-group-item-danger';
          }
        }
      }
      else{
        if (currentChoice === correct){
          return 'list-group-item-success';
        }
      }
    }
  }
  getcustomCss2 = (selectedChoice, currentChoice, answer, correct) => {
    if (this.grading === true) {
      if (selectedChoice === currentChoice){
        if (answer !== null){
          if (answer === correct){
            return 'fa fa-check';
          }
          if (answer !== correct){
            return 'fa fa-times';
          }
        }
      }
      else{
        if (currentChoice === correct){
          return 'fa fa-check';
        }
      }
    }
  }
  getcustomCss3 = (answer, correct) => {
    if (this.grading === true) {
      if (answer !== null){
        if (answer === correct){
          return 'fa fa-check';
        }
        if (answer !== correct){
          return 'fa fa-times';
        }
      }
    }
  }
  changeGrading = () => {
    this.grading = true;
  }
  ngOnInit(): void {
  }

}
