import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/Yuhao-Augus-Su/courses`)
      .then(response => response.json())

  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/Yuhao-Augus-Su/courses/${courseId}`)
      .then(response => response.json())

  deleteCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/Yuhao-Augus-Su/courses/${courseId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  createCourse = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/Yuhao-Augus-Su/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course', editing: false}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
}
