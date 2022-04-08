import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {



  constructor(private fb:FormBuilder,private empService:DataService) { }

  newUser = this.fb.group({
    name:[''],
    email:[''],
    contactNum:[''],
    dob:[''],
    sex:['']

  })

  ngOnInit(): void {
  }

  public user =[];
onSubmit(){

  this.user = this.newUser.value;
  this.empService.createEmployee(this.user).subscribe((response)=>{
    console.log("User Added Successfully");
    this.newUser.reset();
  } )

}

backList(){

}
}
