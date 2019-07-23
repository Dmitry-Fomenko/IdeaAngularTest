import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor( public messageService: MessageService ) { } // инжектируем  наш сервис
  //  и далее используем его в .html  !!! public
  // <button class="clear"(click)="messageService.clear()">clear</button>

  ngOnInit() {
    this.messageService.add('hello from message component on Init');
  }

}
