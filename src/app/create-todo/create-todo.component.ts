import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  constructor() { }
  @Input() todos
  ngOnInit(): void {
  }

  todoCreateForm: FormGroup = new FormGroup({
    "title": new FormControl('',Validators.required),
    "text": new FormControl('',Validators.required)


  })
  newTodo: any
  
  submit() {
    this.newTodo = {
      title: this.todoCreateForm.value.title,
      text: this.todoCreateForm.value.text,
      done: false,
      removed: false
    }
    this.todos.push(this.newTodo)
    this.todoCreateForm.reset()
  }

}
