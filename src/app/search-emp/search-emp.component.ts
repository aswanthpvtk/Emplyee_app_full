import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {

  empcode=""
  searchData:any=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"empcode":this.empcode}
    console.log(data)
    this.api.searchData(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid Employee Code")
        }else{
          this.searchData=response
        }
      }
    )
  }

}