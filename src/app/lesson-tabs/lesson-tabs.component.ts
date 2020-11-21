import { Component, OnInit } from '@angular/core';
import {LessonService} from '../../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  lessons = [];
  courseId = '';
  moduleId = '';
  lessonId = '';

  constructor(private lessonService: LessonService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      if (typeof this.moduleId !== 'undefined') {
        this.lessonService.findLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

}
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-lesson-tabs',
//   templateUrl: './lesson-tabs.component.html',
//   styleUrls: ['./lesson-tabs.component.css']
// })
// export class LessonTabsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
