import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public details =new Array()
  singleEmp:any;
  id: any;
  closeResult = '';
  editVal:boolean = false;
  
  constructor(private data:DataService,private route:ActivatedRoute,private router:Router,private fb:FormBuilder) { }
  newUser = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    contactNum:['',Validators.required],
    dob:['',Validators.required],
    sex:['',Validators.required]

  })

  ngOnInit(): void {

    this.route.queryParams
      .subscribe((params:any) => {
        console.log(params.order); // { order: "popular" }
        // this.details.push(params.order);
        this.getEmp(params.order)

        this.id= params.order;
        // console.log(this.order); // popular
      }
    );

  
  }

  getEmp(empdata:any){
    this.data.getId(empdata).subscribe((resp)=>{
      this.singleEmp = resp;
      console.log(resp);
    }
    )
  }

  del(){
    this.data.deleteEmployee(this.id).subscribe((response)=>{
      this.router.navigate(["/emplist"])
    })

  }

  edit(){
    this.editVal = true;
    this.newUser.patchValue(this.singleEmp);
  }
  
  onSubmit(){
    this.data.updateEmployee(this.id,this.newUser.value).subscribe((resp)=>{
      this.getEmp(this.id);
      this.editVal=false;
    })

  }


  back(){
    this.router.navigate(['/emplist']);
    console.log("hello");
    
  }
  close(){
    this.editVal=false;
  }
  }







