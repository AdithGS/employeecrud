import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {

  constructor(private emp:DataService) { }

  public employee :any = [];

  ngOnInit(): void {
    this.emp.getEmployees().subscribe(resp=>
    console.log(this.employee=resp)
    );
  }

}
