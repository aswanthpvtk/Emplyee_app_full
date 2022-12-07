import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

name=""
designation=""
salary=""
cname=""
mob=""

uname=""
psw=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"designation":this.designation,"salary":this.salary,"cname":this.cname,"mob":this.mob,"uname":this.uname,"psw":this.psw}
    console.log(data)
    this.api.addEmp(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Successfully added")
  
          this.name=""
  
          this.designation=""

          this.salary=""
  
          this.cname=""
  
          this.mob=""
  
          this.uname=""

          this.psw=""
  
        } else {
  
          alert("Something went wrong")
  
        }
      }
    )
  }

}
