import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  data: any;
  details: any;


  constructor(private router:Router,private emp:DataService) { }

  ngOnInit(): void {
    this.employee();
  }


  empDet(data:any){
    

    this.router.navigate(
      ['/empdetails'],
      { queryParams: { order: data.id } }
    );
    console.log(data);
    
  }

  employee(){
    this.emp.getEmployees().subscribe((resp:any)=>{
      this.details = resp;
      console.log(resp);
      
    })
  }

  user(){
    this.router.navigate
  }

}
