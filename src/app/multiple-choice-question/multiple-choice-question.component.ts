import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
// import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }
  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' };
  grading = false;
  answer = null;
  selectedChoice = '';
  selectChoice = (choice) => {
    this.selectedChoice = choice; }
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
