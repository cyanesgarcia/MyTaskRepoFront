import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TaskRestControllerService } from '../services/task/api/taskRestController.service';
import { Task } from '../services/task/model/task';
import { FormControl } from '@angular/forms';


export class Status {
  id: number;
  name: string;
}


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];

  status = [
    {
      value: 'inProgress',
      label: 'In progress'
    },
    {
      value: 'pending',
      label: 'Pending'
    },
    {
      value: 'finished',
      label: 'Finished'
    }
  ];


  constructor(private taskRestControllerService: TaskRestControllerService, public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.getTasks();
  }

  remove(id: number) {
    console.log("eleminando el elemento " + id);
    this.taskRestControllerService._delete(id).subscribe((data: Task[]) => {
          console.log(data);
          this.tasks = data;
  });
  }

  private getTasks(){
      this.taskRestControllerService.retrieveAllItems().subscribe((data: Task[]) => {
          console.log(data);
          this.tasks = data;
  });
}

  public createTask(description: string) {
    this.taskRestControllerService.insert({
      description: description,
      taskStatus: 'Pending'
    }).subscribe(task => {console.log(task); this.tasks.push(task);});
  }

   public updateTask(id: number) {
    const taskToUpdate = this.tasks[id];
    if (taskToUpdate) {
      console.log('Updating task', taskToUpdate);
      this.taskRestControllerService.updateTasks(taskToUpdate).subscribe(task => {console.log(task);});
    }
  }
    

}