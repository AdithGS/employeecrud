import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
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
    name:['',Validators.required],
    email:['',Validators.required],
    contactNum:['',Validators.required],
    dob:['',Validators.required],
    sex:['',Validators.required]

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
