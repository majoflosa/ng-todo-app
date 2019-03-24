import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  taskList = [
    { id: 1, title: '15min workout', status: 'unstarted', description: 'Stretch/cardio in the morning.' },
    { id: 2, title: 'Check email', status: 'ongoing', description: 'Check and reply important messages.' },
    { id: 3, title: 'Prepare lunch', status: 'done', description: 'Make sandwich to take to work.' },
    { id: 4, title: 'Style home page', status: 'revising', description: 'Write CSS for home page on website.' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
