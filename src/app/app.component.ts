import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from './services/storage.service';
export interface Card {
  title: string
  text: string
  done: boolean
  removed: boolean
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {

  titleNew: string = '';
  text: string = '';

  ngOnInit() {
    console.log(this.todos)
  }

  loadTodos() {
    console.log(this.todos)
  }



  todos: Card[] = [
    {
      title: 'Card 1', text: 'This is card 1', done: false, removed: false
    },
    {
      title: 'Card 2', text: 'This is card 2', done: true, removed: false
    },
    {
      title: 'Last Card', text: 'This is card 3', done: false, removed: false
    }
  ]

}
