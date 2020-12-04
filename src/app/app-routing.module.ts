import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleListComponent } from './module-list/module-list.component';
import {CourseTableComponent} from './course-table/course-table.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'table/courses/:cid/modules', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent},


  // {path: 'courses', component: CourseNavigatorComponent},
  // {path: 'courses/:cid/modules', component: CourseNavigatorComponent},
  // {path: 'table/courses/:cid/modules', component: ModuleListComponent},
  // {path: 'table/courses/:cid/modules/:mid/lessons', component: LessonTabsComponent},
  // {path: 'table/courses/:cid/modules/:mid/lessons/:lid/topics', component: TopicPillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
