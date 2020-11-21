import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../services/CourseServiceClient';
import {ModuleService} from '../../services/ModuleServiceClient';
import {LessonService} from '../../services/LessonServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  courseId = '';
  courseTitle = '';
  modules = [];
  lessons = [];
  topics = [];

  goback = () => {
    window.history.go(-1);
  }


  constructor(
    private activedRoute: ActivatedRoute,
    private courseService: CourseService,
    private moduleService: ModuleService,
    private lessonService: LessonService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.courseId = params.cid;
    });
    this.moduleService.findModulesForCourse(this.courseId)
      .then(modules => this.modules = modules);
    this.courseService.findCourseById(this.courseId)
      .then(course => this.courseTitle = course.title);
  }
}
