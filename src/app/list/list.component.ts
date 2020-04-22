import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private appComponent:AppComponent) { }

  list = [];

  ngOnInit() {
    this.list = this.appComponent.getData();
  }
}