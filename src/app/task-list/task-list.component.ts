import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { copyStyles } from '@angular/animations/browser/src/util';


export interface Task {
  id?: number;
  task_status?: string;
  description?: string;
}

export class Status {
  id: number;
  name: string;
}

const ELEMENT_DATA: Task[] = [
  { id: 1, task_status: "In progress", description: "Backend, microservicios con Spring boot." },
  { id: 2, task_status: "Pending", description: "Repositorio Proyecto, crear repositorio público de GitHub." },
  { id: 3, task_status: "Finished", description: "DevOps, desplegar imagen de la aplicación desde DockerHub en AKS." }
]

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  status: Status[] = [
    { id: 1, name: 'In progress' },
    { id: 2, name: 'Pending' },
    { id: 3, name: 'Finished' }
  ];

  constructor(public dialog: MatDialog) {
    this.tasks = ELEMENT_DATA;
  }

  ngOnInit() {
  }

  remove(item: Task) {
    console.log("eleminando el elemento " + item.id);
    const index = this.tasks.indexOf(item);
    this.tasks.splice(index, 1);
  }

  newTask(newdescription: string) {
    this.tasks.push({ id: this.tasks.length+1, task_status: "In progress", description: newdescription });
      
  }

}