import { Component, AfterViewInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements AfterViewInit {
  public taskMap: TaskItem[] = [
    new TaskItem(1, "1", "1", "todo"),
    new TaskItem(2, "2", "2", "inProgress"),
  ];

  allTasks: { title: string; status: string; list: TaskItem[] }[] = [
    { title: "Нужно сделать", status: "todo", list: [] },
    { title: "В работе", status: "inProgress", list: [] },
    { title: "Выполнено", status: "completed", list: [] },
    { title: "Отложенное", status: "deferred", list: [] },
  ];

  ngAfterViewInit() {
    this.allTasks.forEach(group => {
      group.list = this.taskMap.filter(task => task.status === group.status);
    });
  }

  addTask() {
    const title = prompt('Введите название задачи:');
    if (!title) return;

    const description = prompt('Введите описание задачи:');
    if (!description) return;

    const newTask = new TaskItem(this.taskMap.length + 1, title, description, "todo");
    this.allTasks[0].list.push(newTask);
    this.taskMap.push(newTask);
  }

  drop(event: CdkDragDrop<TaskItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      const newStatus = this.allTasks.find(group =>
        group.list === event.container.data)?.status as 'todo' | 'inProgress' | 'completed' | 'deferred' || 'todo';

      task.status = newStatus;

      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}

class TaskItem {
  constructor(
    public itemIndex: number,
    public title: string,
    public description: string,
    public status: 'todo' | 'inProgress' | 'completed' | 'deferred'
  ) { }
}
