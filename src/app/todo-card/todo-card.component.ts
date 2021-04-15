import { Component, Input } from '@angular/core';
import { Card } from '../app.component';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent  {

  
  @Input() todo: Card
  @Input() index: number
  
  title = 'My Card Title'
  text = 'My sample text'

  
  
 
}
