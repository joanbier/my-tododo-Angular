import { Component } from '@angular/core';
import {Task} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

editMode= false;
taskName = 'Sugerowane zadanie codzienne: odkurzanie';
taskDate = '';

config: {[key:string]:string}=null

tasks: Task[]=[

{name:"Umyć buty",
deadline: "2021-05-29",
done: false
},
{name:"Pójść do biedry po żubra",
deadline: "2021-05-26",
done: true
},
{name:"Pograć w TLOU",
deadline: "2021-05-30",
done: false
}

]

constructor(){

setTimeout(()=>{
this.config={
 title: "Lista zadań",
 footer: "@ Lista zadań w angularze",
 date: new Date().toDateString()
}
  },500)

this.sortTask()

}

clearTasks(){
  this.tasks = [];
}

createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTask()
  }

switchEditMode(){
  this.editMode=!this.editMode
}  

markTaskAsDone(task:Task){
  task.done = true
  this.sortTask()
}

removeTask(task:Task){
 this.tasks = this.tasks.filter(item=> item !== task)
}

private sortTask(){
  this.tasks = this.tasks.sort((a: Task, b:Task)=> a.done===b.done ? 0 : a.done ? 1 : -1)
}

}
