import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-planner',
  templateUrl: './task-planner.component.html',
  styleUrls: ['./task-planner.component.css']
})
export class TaskPlannerComponent {
  taskArray = [{
    taskName: 'Brush teeth',
    isCompleted: false
  }]
  onSubmit(form: NgForm){
    console.log(form)
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
    form.reset();
  }
  onDelete(index: number){
    console.log(index);
    this.taskArray.splice(index, 1);
  }
  onChecked(index: number){
    console.log(this.taskArray)
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
  
}
