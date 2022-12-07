import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {


  
  constructor(private api:ApiService)
 {
  api.fetchEmp().subscribe(


    (Response)=>
    {
      this.data=Response;
    }
  )
 }

data:any = []
}
